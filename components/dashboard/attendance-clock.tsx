"use client"

import { useEffect, useState, useRef } from "react"
import { useSession } from "next-auth/react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { AnimatedCard } from "@/components/animated-card"
import {
  Clock,
  LogIn,
  LogOut,
  MapPin,
  Laptop,
  Briefcase,
  PenTool,
  CheckCircle2,
  AlertCircle,
  HelpCircle
} from "lucide-react"
import {
  createAttendanceRecord,
  updateAttendanceRecord,
  getEmployees,
  getAttendanceRecords
} from "@/app/actions/team"
import type { AttendanceRecord } from "@/lib/types/hr"
import { toast } from "sonner"

interface AttendanceClockProps {
  themeColor?: "green" | "blue" | "amber" | "indigo" | "purple"
  isClientMode?: boolean
}

export function AttendanceClock({ themeColor = "indigo", isClientMode = false }: AttendanceClockProps) {
  const { data: session } = useSession()
  const [time, setTime] = useState<string>("")
  const [dateStr, setDateStr] = useState<string>("")
  const [location, setLocation] = useState<"office" | "remote" | "hybrid">("office")
  const [note, setNote] = useState<string>("")
  const [loading, setLoading] = useState(false)
  const [records, setRecords] = useState<AttendanceRecord[]>([])
  const [isClient, setIsClient] = useState(false)

  // Real-time elapsed session state
  const [elapsedTime, setElapsedTime] = useState<string>("")
  const elapsedIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const today = new Date().toISOString().split("T")[0]

  // Identify current employee / user identity
  const currentUserId = (session?.user as any)?.employeeId || session?.user?.id || ""
  const currentUserName = session?.user?.name || "Guest User"

  // Office timing configurations
  const OFFICE_IN = "10:30"
  const GRACE = 30 // minutes

  // Colors mapping
  const colorMap = {
    green: {
      border: "border-emerald-500/20",
      bg: "from-emerald-500/5 via-green-500/5 to-emerald-500/10",
      pulse: "bg-emerald-500",
      btnIn: "bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20",
      icon: "text-emerald-500",
      badge: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    },
    blue: {
      border: "border-blue-500/20",
      bg: "from-blue-500/5 via-indigo-500/5 to-blue-500/10",
      pulse: "bg-blue-500",
      btnIn: "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20",
      icon: "text-blue-500",
      badge: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    amber: {
      border: "border-amber-500/20",
      bg: "from-amber-500/5 via-orange-500/5 to-amber-500/10",
      pulse: "bg-amber-500",
      btnIn: "bg-amber-600 hover:bg-amber-700 shadow-amber-600/20",
      icon: "text-amber-500",
      badge: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    },
    indigo: {
      border: "border-indigo-500/20",
      bg: "from-indigo-500/5 via-purple-500/5 to-indigo-500/10",
      pulse: "bg-indigo-500",
      btnIn: "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20",
      icon: "text-indigo-500",
      badge: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
    },
    purple: {
      border: "border-purple-500/20",
      bg: "from-purple-500/5 via-fuchsia-500/5 to-purple-500/10",
      pulse: "bg-purple-500",
      btnIn: "bg-purple-600 hover:bg-purple-700 shadow-purple-600/20",
      icon: "text-purple-500",
      badge: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    }
  }

  const activeColor = colorMap[themeColor]

  // Setup Clock and Hydration
  useEffect(() => {
    setIsClient(true)
    const timer = setInterval(() => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour12: true }))
      setDateStr(now.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))
    }, 1000)

    // Initial clock load
    const now = new Date()
    setTime(now.toLocaleTimeString("en-US", { hour12: true }))
    setDateStr(now.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }))

    return () => clearInterval(timer)
  }, [])

  // Load user records
  const loadRecords = async () => {
    if (!currentUserId) return
    setLoading(true)
    try {
      const res = await getAttendanceRecords()
      if (Array.isArray(res)) {
        setRecords(res as AttendanceRecord[])
      }
    } catch (err) {
      console.error("Failed to load records", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (currentUserId) {
      loadRecords()
    }
  }, [currentUserId])

  // Get active clock-in record for today
  const myRecord = records.find(r => r.employeeId === currentUserId && r.date === today)

  // Track session duration elapsed time
  useEffect(() => {
    if (myRecord && myRecord.clockIn && !myRecord.clockOut) {
      const [inH, inM] = myRecord.clockIn.split(":").map(Number)
      
      const updateElapsed = () => {
        const now = new Date()
        const clockInDate = new Date()
        clockInDate.setHours(inH, inM, 0, 0)
        
        // Handle timezone/date rollover just in case
        let diffMs = now.getTime() - clockInDate.getTime()
        if (diffMs < 0) diffMs = 0 // prevent negative elapsed on late clock-ins
        
        const hrs = Math.floor(diffMs / 3600000)
        const mins = Math.floor((diffMs % 3600000) / 60000)
        const secs = Math.floor((diffMs % 60000) / 1000)
        
        setElapsedTime(
          `${String(hrs).padStart(2, "0")}h ${String(mins).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s`
        )
      }

      updateElapsed()
      elapsedIntervalRef.current = setInterval(updateElapsed, 1000)
    } else {
      if (elapsedIntervalRef.current) {
        clearInterval(elapsedIntervalRef.current)
      }
      setElapsedTime("")
    }

    return () => {
      if (elapsedIntervalRef.current) {
        clearInterval(elapsedIntervalRef.current)
      }
    }
  }, [myRecord])

  const isLate = (clockInTime: string) => {
    const [h, m] = clockInTime.split(":").map(Number)
    const [oh, om] = OFFICE_IN.split(":").map(Number)
    return h * 60 + m > oh * 60 + om + GRACE
  }

  const getArrivalStatusLabel = (clockInTime: string) => {
    const [h, m] = clockInTime.split(":").map(Number)
    const [oh, om] = OFFICE_IN.split(":").map(Number)
    const mins = h * 60 + m, offMins = oh * 60 + om
    if (mins <= offMins) return { text: "On Time", color: "text-emerald-500" }
    if (mins <= offMins + GRACE) return { text: "Within Grace", color: "text-amber-500" }
    const late = mins - offMins
    return { text: `Late by ${Math.floor(late / 60) > 0 ? `${Math.floor(late / 60)}h ` : ""}${late % 60}m`, color: "text-rose-500" }
  }

  const handleClockIn = async () => {
    if (!currentUserId || myRecord) return
    setLoading(true)
    const now = new Date()
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
    const status = isLate(timeStr) ? "late" : location === "remote" ? "remote" : "present"

    try {
      const result = await createAttendanceRecord({
        employeeId: currentUserId,
        employeeName: currentUserName,
        date: today,
        status,
        clockIn: timeStr,
        totalHours: 0,
        workLocation: location,
        notes: note || `Clocked in from ${location}`,
      })

      if ("error" in result) {
        toast.error(result.error as string)
      } else {
        toast.success("Clocked in successfully!")
        setRecords(prev => [...prev, result as AttendanceRecord])
        setNote("")
      }
    } catch (err) {
      toast.error("Failed to clock in")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleClockOut = async () => {
    if (!myRecord || myRecord.clockOut) return
    setLoading(true)
    const now = new Date()
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`
    
    // Calculate total hours
    const [inH, inM] = (myRecord.clockIn || "10:30").split(":").map(Number)
    const elapsedMins = now.getHours() * 60 + now.getMinutes() - (inH * 60 + inM)
    const hrs = Math.round((Math.max(0, elapsedMins) / 60) * 10) / 10

    try {
      const result = await updateAttendanceRecord(myRecord.id, {
        clockOut: timeStr,
        totalHours: hrs,
        notes: note ? `${myRecord.notes} | Out note: ${note}` : myRecord.notes,
      })

      if ("error" in result) {
        toast.error(result.error as string)
      } else {
        toast.success("Clocked out successfully!")
        setRecords(prev => prev.map(r => r.id === myRecord.id ? (result as AttendanceRecord) : r))
        setNote("")
      }
    } catch (err) {
      toast.error("Failed to clock out")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (!isClient) return null

  return (
    <AnimatedCard delay={50} className={`border ${activeColor.border} bg-gradient-to-br ${activeColor.bg} backdrop-blur-md overflow-hidden relative shadow-lg`}>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6">
          {/* Section 1: Live Time, Date, Status */}
          <div className="flex-1 flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-card border border-border/80 shadow-md flex items-center justify-center relative">
                <Clock className={`w-8 h-8 ${activeColor.icon}`} />
                {/* Pulsing indicator */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${myRecord ? (myRecord.clockOut ? 'bg-slate-400' : 'bg-green-500') : 'bg-slate-400'}`}></span>
                  <span className={`relative inline-flex rounded-full h-3 w-3 ${myRecord ? (myRecord.clockOut ? 'bg-slate-400' : 'bg-green-500') : 'bg-slate-400'}`}></span>
                </span>
              </div>
            </div>

            <div className="text-center md:text-left space-y-1">
              <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground flex items-center justify-center md:justify-start gap-1">
                <span>{isClientMode ? "Client Session Tracker" : "Attendance Clock"}</span>
                {(!session?.user as any)?.employeeId && (
                  <Badge variant="outline" className="text-[9px] h-4 leading-none px-1 border-yellow-500/20 text-yellow-500 bg-yellow-500/5">
                    User Profile Mode
                  </Badge>
                )}
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight tabular-nums text-foreground">
                {time}
              </h2>
              <p className="text-xs text-muted-foreground font-medium">{dateStr}</p>
              
              {/* Timing constraints detail */}
              {!isClientMode && (
                <p className="text-[10px] text-muted-foreground/80 mt-1">
                  Office Hours: {OFFICE_IN} AM - 7:00 PM · Grace period: {GRACE} mins
                </p>
              )}
            </div>
          </div>

          {/* Section 2: Session info / Elapsed Active Timer */}
          {myRecord && !myRecord.clockOut && (
            <div className="flex-1 flex flex-col items-center justify-center border-y md:border-y-0 md:border-x border-border/50 py-3 md:py-0 px-4">
              <div className="text-center space-y-1 bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl px-4 py-2 w-full max-w-[200px] shadow-sm">
                <p className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground">Elapsed Session</p>
                <p className="text-lg font-black font-mono text-primary tabular-nums animate-pulse">
                  {elapsedTime || "00h 00m 00s"}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-[10px] font-medium text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-ping" />
                  <span>Clocked in at {myRecord.clockIn}</span>
                </div>
              </div>
            </div>
          )}

          {/* Section 3: Interactive Inputs and Action Buttons */}
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-4">
            {!myRecord ? (
              // Clock In Mode
              <div className="w-full space-y-3">
                {/* Work Location selector */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setLocation("office")}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                      location === "office"
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-secondary/40 border-border/50 text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Office</span>
                  </button>
                  <button
                    onClick={() => setLocation("remote")}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                      location === "remote"
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-secondary/40 border-border/50 text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Remote</span>
                  </button>
                  <button
                    onClick={() => setLocation("hybrid")}
                    className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                      location === "hybrid"
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-secondary/40 border-border/50 text-muted-foreground hover:bg-secondary/80"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Hybrid</span>
                  </button>
                </div>

                {/* Focus notes */}
                <div className="relative">
                  <PenTool className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60" />
                  <Input
                    placeholder="Focus note (e.g. Working on CRM tasks)"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="pl-8 h-9 text-xs bg-card/60 border-border/50"
                  />
                </div>

                {/* Clock In Button */}
                <Button
                  onClick={handleClockIn}
                  disabled={loading}
                  className={`w-full gap-2 text-white h-10 font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02] active:scale-95 ${activeColor.btnIn}`}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Clock In</span>
                </Button>
              </div>
            ) : !myRecord.clockOut ? (
              // Clock Out Mode
              <div className="w-full space-y-3">
                {/* Current info row */}
                <div className="flex items-center justify-between text-xs font-medium px-1 bg-card/30 py-1.5 rounded-lg border border-border/30">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>Location: <span className="capitalize font-bold text-foreground">{myRecord.workLocation || "Office"}</span></span>
                  </span>
                  {myRecord.clockIn && (
                    <span className={`font-semibold flex items-center gap-1 ${getArrivalStatusLabel(myRecord.clockIn).color}`}>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {getArrivalStatusLabel(myRecord.clockIn).text}
                    </span>
                  )}
                </div>

                {/* Focus notes on clock out */}
                <div className="relative">
                  <PenTool className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/60" />
                  <Input
                    placeholder="Clock out note/wrap-up comments..."
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    className="pl-8 h-9 text-xs bg-card/60 border-border/50"
                  />
                </div>

                {/* Clock Out Button */}
                <Button
                  onClick={handleClockOut}
                  disabled={loading}
                  className="w-full gap-2 bg-rose-600 hover:bg-rose-700 text-white h-10 font-bold rounded-xl shadow-lg shadow-rose-600/20 transition-transform hover:scale-[1.02] active:scale-95"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Clock Out</span>
                </Button>
              </div>
            ) : (
              // Complete Mode
              <div className="w-full flex flex-col justify-center items-center gap-2 py-2">
                <div className="flex gap-4 text-center bg-card/60 px-4 py-2 border border-border/50 rounded-xl shadow-sm w-full justify-around">
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">In</p>
                    <p className="font-extrabold text-green-500 text-sm">{myRecord.clockIn}</p>
                  </div>
                  <div className="border-l border-border/50 h-8" />
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">Out</p>
                    <p className="font-extrabold text-rose-500 text-sm">{myRecord.clockOut}</p>
                  </div>
                  <div className="border-l border-border/50 h-8" />
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">Total Hours</p>
                    <p className={`font-extrabold text-sm ${activeColor.icon}`}>{myRecord.totalHours}h</p>
                  </div>
                </div>
                <Badge className={`w-full flex items-center justify-center py-1 gap-1 border ${activeColor.badge}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Day Completed Successfully!</span>
                </Badge>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </AnimatedCard>
  )
}
