"use client"

import { useState, useEffect } from "react"

interface TimeTrackerProps {
    taskId: string
    estimatedHours: number
    actualHours: number
    onLogTime: (hours: number, description: string, isBillable: boolean) => void
}

export function TimeTracker({ taskId, estimatedHours, actualHours, onLogTime }: TimeTrackerProps) {
    const [isRunning, setIsRunning] = useState(false)
    const [elapsedSeconds, setElapsedSeconds] = useState(0)
    const [showManualEntry, setShowManualEntry] = useState(false)
    const [manualHours, setManualHours] = useState("")
    const [description, setDescription] = useState("")
    const [isBillable, setIsBillable] = useState(true)

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null
        if (isRunning) {
            interval = setInterval(() => {
                setElapsedSeconds((prev) => prev + 1)
            }, 1000)
        }
        return () => {
            if (interval) clearInterval(interval)
        }
    }, [isRunning])

    const formatTime = (seconds: number) => {
        const h = Math.floor(seconds / 3600)
        const m = Math.floor((seconds % 3600) / 60)
        const s = seconds % 60
        return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
    }

    const handleToggleTimer = () => {
        if (isRunning) {
            // Stop timer and log time
            const hours = elapsedSeconds / 3600
            if (hours >= 0.01) {
                onLogTime(Number(hours.toFixed(2)), description || "Timer session", isBillable)
            }
            setElapsedSeconds(0)
            setDescription("")
        }
        setIsRunning(!isRunning)
    }

    const handleManualSubmit = () => {
        const hours = parseFloat(manualHours)
        if (!isNaN(hours) && hours > 0) {
            onLogTime(hours, description || "Manual entry", isBillable)
            setManualHours("")
            setDescription("")
            setShowManualEntry(false)
        }
    }

    const remainingHours = Math.max(0, estimatedHours - actualHours)
    const progressPercent = estimatedHours > 0 ? Math.min((actualHours / estimatedHours) * 100, 100) : 0
    const isOverBudget = actualHours > estimatedHours

    return (
        <div className="space-y-4">
            {/* Time Summary */}
            <div className="grid grid-cols-3 gap-3">
                <div className="bg-secondary/50 p-3 rounded-lg text-center">
                    <p className="text-xs text-muted-foreground">Estimated</p>
                    <p className="text-xl font-bold">{estimatedHours}h</p>
                </div>
                <div className="bg-secondary/50 p-3 rounded-lg text-center">
                    <p className="text-xs text-muted-foreground">Logged</p>
                    <p className="text-xl font-bold text-primary">{actualHours}h</p>
                </div>
                <div className="bg-secondary/50 p-3 rounded-lg text-center">
                    <p className="text-xs text-muted-foreground">Remaining</p>
                    <p className={`text-xl font-bold ${isOverBudget ? "text-destructive" : "text-success"}`}>
                        {isOverBudget ? `-${(actualHours - estimatedHours).toFixed(1)}h` : `${remainingHours.toFixed(1)}h`}
                    </p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1">
                <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Time Budget</span>
                    <span>{progressPercent.toFixed(0)}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                    <div
                        className={`h-2 rounded-full transition-all ${isOverBudget ? "bg-destructive" : "bg-primary"}`}
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Timer Controls */}
            <div className="flex items-center gap-3">
                <button
                    onClick={handleToggleTimer}
                    className={`flex-1 py-3 rounded-lg font-medium transition-all ${isRunning
                            ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                >
                    {isRunning ? (
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-sm bg-current" />
                            Stop Timer: {formatTime(elapsedSeconds)}
                        </span>
                    ) : (
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-current" />
                            Start Timer
                        </span>
                    )}
                </button>
                <button
                    onClick={() => setShowManualEntry(!showManualEntry)}
                    className="px-4 py-3 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors text-sm"
                >
                    + Manual
                </button>
            </div>

            {/* Manual Entry Form */}
            {showManualEntry && (
                <div className="space-y-3 p-3 bg-secondary/30 rounded-lg animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="text-xs font-medium text-muted-foreground">Hours</label>
                            <input
                                type="number"
                                step="0.25"
                                min="0"
                                value={manualHours}
                                onChange={(e) => setManualHours(e.target.value)}
                                placeholder="e.g. 2.5"
                                className="w-full mt-1 px-3 py-2 rounded-lg bg-background border border-border text-sm"
                            />
                        </div>
                        <div className="flex items-end">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={isBillable}
                                    onChange={(e) => setIsBillable(e.target.checked)}
                                    className="w-4 h-4 rounded"
                                />
                                <span className="text-sm">Billable</span>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label className="text-xs font-medium text-muted-foreground">Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="What did you work on?"
                            className="w-full mt-1 px-3 py-2 rounded-lg bg-background border border-border text-sm"
                        />
                    </div>
                    <button
                        onClick={handleManualSubmit}
                        className="w-full py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium"
                    >
                        Log Time
                    </button>
                </div>
            )}

            {/* Timer running indicator */}
            {isRunning && (
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    Timer is running. Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Add description..."
                        className="flex-1 bg-transparent border-none outline-none text-foreground"
                    />
                </div>
            )}
        </div>
    )
}
