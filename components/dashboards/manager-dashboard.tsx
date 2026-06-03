"use client"

import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Users,
  FolderKanban,
  CheckSquare,
  Clock,
  Target,
  Calendar,
  Sparkles,
  TrendingUp,
  AlertCircle,
  PlusCircle,
  Briefcase,
  UserCheck,
  UserX,
  FileText
} from "lucide-react"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { getManagerDashboardData } from "@/app/actions/dashboard"
import { getProjects } from "@/app/actions/projects"
import { createTask, getTasks } from "@/app/actions/tasks"
import { AttendanceClock } from "@/components/dashboard/attendance-clock"
import { toast } from "sonner"

type TeamMember = {
  id: string
  name: string
  role: string
  status: string
  tasks: number
}

type ProjectItem = {
  name: string
  progress: number
  dueDate: string
  status: string
}

type ManagerData = {
  teamCount: number
  activeProjectCount: number
  openTasks: number
  dueThisWeek: number
  myTeam: TeamMember[]
  activeProjects: ProjectItem[]
}

type OverdueTaskItem = {
  id: string
  title: string
  assignee: string
  dueDate: string
  projectName: string
}

export function ManagerDashboard() {
  const { data: session } = useSession()
  const [data, setData] = useState<ManagerData | null>(null)
  const [loading, setLoading] = useState(true)
  const [projectsList, setProjectsList] = useState<any[]>([])
  const [overdueTasks, setOverdueTasks] = useState<OverdueTaskItem[]>([])

  // Form states for Quick Task Delegation
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDesc, setTaskDesc] = useState("")
  const [selectedProjectId, setSelectedProjectId] = useState("")
  const [selectedAssigneeId, setSelectedAssigneeId] = useState("")
  const [taskDueDate, setTaskDueDate] = useState("")
  const [taskPriority, setTaskPriority] = useState("medium")
  const [submitting, setSubmitting] = useState(false)

  const loadData = async () => {
    try {
      const managerName = session?.user?.name || ""
      const [statsRes, projRes, allTasks] = await Promise.all([
        getManagerDashboardData(managerName),
        getProjects(),
        getTasks()
      ])

      if (!("error" in statsRes)) {
        setData(statsRes as ManagerData)
      }
      if (Array.isArray(projRes)) {
        setProjectsList(projRes)
      }

      // Filter overdue tasks for team members
      if (Array.isArray(allTasks) && !("error" in statsRes)) {
        const teamNames = (statsRes as ManagerData).myTeam.map(t => t.name)
        const todayStr = new Date().toISOString().split("T")[0]
        
        const overdue = allTasks
          .filter(t => {
            if (t.status === "done") return false
            if (!t.dueDate) return false
            const assignees = Array.isArray(t.assignees) ? t.assignees : []
            const isAssignedToTeam = assignees.some((a: any) => {
              const name = typeof a === "string" ? a : a?.name || ""
              return teamNames.includes(name)
            })
            return isAssignedToTeam && t.dueDate < todayStr
          })
          .map(t => {
            const assignees = Array.isArray(t.assignees) ? t.assignees : []
            const assigneeName = assignees.length > 0 
              ? (typeof assignees[0] === "string" ? assignees[0] : assignees[0].name)
              : "Unassigned"
            return {
              id: t.id,
              title: t.title,
              assignee: assigneeName,
              dueDate: new Date(t.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
              projectName: t.projectName || "General"
            }
          })
        setOverdueTasks(overdue.slice(0, 4))
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (session) {
      loadData()
    }
  }, [session])

  // Handle delegating a new task
  const handleDelegateTask = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!taskTitle || !selectedAssigneeId || !selectedProjectId) {
      toast.error("Please fill in task title, assignee, and project")
      return
    }

    setSubmitting(true)
    try {
      const selectedEmp = data?.myTeam.find(t => t.id === selectedAssigneeId)
      const selectedProj = projectsList.find(p => p.id === selectedProjectId)
      
      const assigneeObj = {
        id: selectedEmp?.id || "",
        name: selectedEmp?.name || "",
        avatar: selectedEmp?.name ? selectedEmp.name.split(" ").map(n => n[0]).join("") : "U"
      }

      const result = await createTask({
        title: taskTitle,
        description: taskDesc || `Task delegated by ${session?.user?.name || "Manager"}`,
        status: "To Do",
        priority: taskPriority,
        projectId: selectedProjectId,
        projectName: selectedProj?.name || "General",
        assignees: [assigneeObj] as any,
        dueDate: taskDueDate || new Date(Date.now() + 86400000 * 2).toISOString().split("T")[0],
        assignedById: (session?.user as any)?.employeeId || session?.user?.id || "",
        assignedByName: session?.user?.name || "Manager"
      })

      if (result && !("error" in result)) {
        toast.success(`Task delegated to ${selectedEmp?.name}! 🚀`)
        setTaskTitle("")
        setTaskDesc("")
        setSelectedProjectId("")
        setSelectedAssigneeId("")
        setTaskDueDate("")
        // Refresh manager stats
        loadData()
      } else {
        toast.error("Failed to delegate task")
      }
    } catch (err) {
      toast.error("An error occurred while delegating task")
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="rounded-2xl bg-muted/30 p-8 h-40" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl bg-muted/30 h-48" />
          <div className="rounded-xl bg-muted/30 h-48" />
          <div className="rounded-xl bg-muted/30 h-48" />
        </div>
      </div>
    )
  }

  // Calculate attendance numbers for summary widget
  const teamTotal = data?.myTeam.length || 0
  const presentCount = data?.myTeam.filter(t => t.status === "present").length || 0
  const remoteCount = data?.myTeam.filter(t => t.status === "remote").length || 0
  const lateCount = data?.myTeam.filter(t => t.status === "late").length || 0
  const absentCount = teamTotal - (presentCount + remoteCount + lateCount)

  const pctPresent = teamTotal > 0 ? Math.round(((presentCount + remoteCount + lateCount) / teamTotal) * 100) : 0

  const heroStats = data ? [
    { label: "Team Members", value: String(data.teamCount), icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Active Projects", value: String(data.activeProjectCount), icon: FolderKanban, color: "text-purple-400", bg: "bg-purple-500/10" },
    { label: "Team Open Tasks", value: String(data.openTasks), icon: CheckSquare, color: "text-emerald-400", bg: "bg-emerald-500/10" },
    { label: "Due This Week", value: String(data.dueThisWeek), icon: Clock, color: "text-amber-400", bg: "bg-amber-500/10" },
  ] : []

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-primary/10 to-indigo-500/10 border border-blue-500/20 p-6 md:p-8 animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-2 py-0.5">
              <Target className="w-3 h-3 mr-1" />
              Manager Workspace
            </Badge>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              Team Pulse Panel 👥
            </h1>
            <p className="text-muted-foreground text-sm max-w-xl">
              Monitor team attendance, track project deadlines, and delegate tasks to maintain maximum velocity.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {heroStats.map((s, i) => (
            <div key={i} className="bg-card/50 backdrop-blur-sm rounded-xl p-4 border border-border/50 transition-all hover:scale-[1.02] hover:border-blue-500/20">
              <div className="flex items-center gap-2">
                <div className={`p-2 rounded-lg ${s.bg}`}>
                  <s.icon className={`w-4 h-4 ${s.color}`} />
                </div>
                <span className="text-xs text-muted-foreground font-semibold">{s.label}</span>
              </div>
              <p className="text-2xl font-black mt-2 text-foreground">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Clock component with Manager Indigo/Blue styling */}
      <AttendanceClock themeColor="blue" />

      {/* Primary Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Side: Operations & Forms (7 Columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Team Attendance live summary */}
          <AnimatedCard delay={100} className="border-blue-500/10">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-blue-500" />
                  Live Team Attendance
                </CardTitle>
                <Badge variant="outline" className="bg-blue-500/5 border-blue-500/20 text-blue-500">
                  {pctPresent}% Active Today
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={pctPresent} className="h-2 bg-secondary" />
              
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                  <p className="text-[10px] text-muted-foreground font-bold">🏢 Office</p>
                  <p className="text-lg font-black text-emerald-500 mt-0.5">{presentCount}</p>
                </div>
                <div className="p-2 bg-blue-500/5 border border-blue-500/10 rounded-xl">
                  <p className="text-[10px] text-muted-foreground font-bold">🏠 Remote</p>
                  <p className="text-lg font-black text-blue-500 mt-0.5">{remoteCount}</p>
                </div>
                <div className="p-2 bg-amber-500/5 border border-amber-500/10 rounded-xl">
                  <p className="text-[10px] text-muted-foreground font-bold">⏰ Late</p>
                  <p className="text-lg font-black text-amber-500 mt-0.5">{lateCount}</p>
                </div>
                <div className="p-2 bg-rose-500/5 border border-rose-500/10 rounded-xl">
                  <p className="text-[10px] text-muted-foreground font-bold">🚗 Out</p>
                  <p className="text-lg font-black text-rose-500 mt-0.5">{absentCount}</p>
                </div>
              </div>
            </CardContent>
          </AnimatedCard>

          {/* Quick Delegate Task Widget */}
          <AnimatedCard delay={150} className="border-blue-500/10">
            <CardHeader className="pb-3 border-b border-border/40">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <PlusCircle className="w-4 h-4 text-blue-500" />
                Delegate Quick Task
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <form onSubmit={handleDelegateTask} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Task Title</label>
                    <Input
                      placeholder="e.g. Design homepage mockup"
                      value={taskTitle}
                      onChange={(e) => setTaskTitle(e.target.value)}
                      className="h-9 text-xs bg-secondary/30"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Due Date</label>
                    <Input
                      type="date"
                      value={taskDueDate}
                      onChange={(e) => setTaskDueDate(e.target.value)}
                      className="h-9 text-xs bg-secondary/30"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Assignee</label>
                    <select
                      value={selectedAssigneeId}
                      onChange={(e) => setSelectedAssigneeId(e.target.value)}
                      className="w-full h-9 text-xs bg-secondary/30 border border-input rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Select Assignee...</option>
                      {(data?.myTeam || []).map(emp => (
                        <option key={emp.id} value={emp.id}>{emp.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Project Link</label>
                    <select
                      value={selectedProjectId}
                      onChange={(e) => setSelectedProjectId(e.target.value)}
                      className="w-full h-9 text-xs bg-secondary/30 border border-input rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Select Project...</option>
                      {projectsList.map(proj => (
                        <option key={proj.id} value={proj.id}>{proj.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-muted-foreground">Priority</label>
                    <select
                      value={taskPriority}
                      onChange={(e) => setTaskPriority(e.target.value)}
                      className="w-full h-9 text-xs bg-secondary/30 border border-input rounded-md px-3 focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-muted-foreground">Task Notes / Description</label>
                  <Input
                    placeholder="Short description of deliverables..."
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                    className="h-9 text-xs bg-secondary/30"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold h-9 rounded-lg gap-1 mt-1 text-xs"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>{submitting ? "Delegating..." : "Delegate Task"}</span>
                </Button>
              </form>
            </CardContent>
          </AnimatedCard>

        </div>

        {/* Right Side: Lists & Warnings (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* My Team List */}
          <AnimatedCard delay={200}>
            <CardHeader className="pb-3 border-b border-border/40">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-500" />
                Team Roster
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3 max-h-[300px] overflow-y-auto">
              <div className="space-y-2">
                {(data?.myTeam || []).map((m, i) => (
                  <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/40 border border-border/40 hover:bg-secondary/60 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className={`w-2.5 h-2.5 rounded-full ${
                        m.status === "present" ? "bg-emerald-500 animate-pulse" :
                        m.status === "remote" ? "bg-blue-500 animate-pulse" :
                        m.status === "late" ? "bg-amber-500 animate-pulse" : "bg-slate-400"
                      }`} />
                      <div>
                        <p className="text-xs font-bold text-foreground">{m.name}</p>
                        <p className="text-[10px] text-muted-foreground">{m.role}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={`text-[9px] font-bold px-1.5 py-0 leading-normal uppercase border ${
                        m.status === "present" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                        m.status === "remote" ? "bg-blue-500/10 text-blue-500 border-blue-500/20" :
                        m.status === "late" ? "bg-amber-500/10 text-amber-500 border-amber-500/20" :
                        "bg-slate-500/10 text-slate-500 border-slate-500/20"
                      }`}>
                        {m.status}
                      </Badge>
                      <p className="text-[9px] text-muted-foreground mt-0.5 font-medium">{m.tasks} active tasks</p>
                    </div>
                  </div>
                ))}
                {(data?.myTeam || []).length === 0 && (
                  <p className="text-xs text-muted-foreground text-center py-4">No team members assigned</p>
                )}
              </div>
            </CardContent>
          </AnimatedCard>

          {/* Active Projects Tracker */}
          <AnimatedCard delay={250}>
            <CardHeader className="pb-3 border-b border-border/40">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <FolderKanban className="w-4 h-4 text-purple-400" />
                Active Projects Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3 space-y-4 max-h-[300px] overflow-y-auto">
              {(data?.activeProjects || []).map((p, i) => (
                <div key={i} className="space-y-1.5 p-2.5 rounded-xl bg-secondary/40 border border-border/40">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-foreground">{p.name}</span>
                    <Badge variant="secondary" className={`text-[9px] px-1.5 ${p.status === "at-risk" ? "bg-rose-500/10 text-rose-500 border-rose-500/20" : "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"}`}>
                      {p.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={p.progress} className="h-1.5 flex-1 bg-secondary" />
                    <span className="text-[10px] font-bold text-muted-foreground">{p.progress}%</span>
                  </div>
                  <p className="text-[9px] text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>Due: {new Date(p.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </p>
                </div>
              ))}
              {(data?.activeProjects || []).length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-4">No active projects found</p>
              )}
            </CardContent>
          </AnimatedCard>

          {/* Overdue Warnings Widget */}
          <AnimatedCard delay={300} className="border-rose-500/20 bg-rose-500/5">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-rose-500 flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                Team Overdue Tasks ({overdueTasks.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {overdueTasks.map(t => (
                <div key={t.id} className="flex justify-between items-center text-xs p-2 bg-background border border-rose-500/20 rounded-lg shadow-sm">
                  <div className="space-y-0.5">
                    <p className="font-bold text-foreground truncate max-w-[150px]">{t.title}</p>
                    <p className="text-[9px] text-muted-foreground">Assignee: {t.assignee}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className="text-[9px] border-rose-500/30 text-rose-500 font-bold bg-rose-500/10">
                      Overdue
                    </Badge>
                    <p className="text-[9px] text-muted-foreground font-semibold mt-0.5">Due: {t.dueDate}</p>
                  </div>
                </div>
              ))}
              {overdueTasks.length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-2">
                  All team tasks are on schedule! 🎉
                </p>
              )}
            </CardContent>
          </AnimatedCard>

        </div>

      </div>
    </div>
  )
}
