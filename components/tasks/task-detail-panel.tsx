"use client"

import { useState } from "react"
import type { Task, TaskStatus, TaskPriority, SubTask, Comment, TimeEntry, ReferenceLink } from "@/lib/types/task"
import { PRIORITY_CONFIG, STATUS_CONFIG } from "@/lib/types/task"
import { teamMembers, projects } from "@/lib/data/tasks"
import { TimeTracker } from "./time-tracker"
import { SubtaskList } from "./subtask-list"
import { CommentThread } from "./comment-thread"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import {
    X,
    ChevronRight,
    Eye,
    EyeOff,
    Link2,
    Archive,
    Printer,
    Trash2,
    Clock,
    Calendar,
    Users,
    Tag,
    AlertTriangle,
    ListChecks,
    MessageSquare,
    Paperclip,
    Activity,
    ExternalLink,
    Upload,
    FileText,
    Image,
    File,
    Plus,
    Figma,
    Github,
    FileSpreadsheet,
    Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface TaskDetailPanelProps {
    task: Task
    isOpen: boolean
    onClose: () => void
    onUpdate: (task: Task) => void
    onDelete: (id: string) => void
}

export function TaskDetailPanel({ task, isOpen, onClose, onUpdate, onDelete }: TaskDetailPanelProps) {
    const [activeTab, setActiveTab] = useState<"details" | "activity">("details")
    const [isWatching, setIsWatching] = useState(false)
    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [isEditingDescription, setIsEditingDescription] = useState(false)
    const [editTitle, setEditTitle] = useState(task.title)
    const [editDescription, setEditDescription] = useState(task.description)

    const handleStatusChange = (status: TaskStatus) => {
        onUpdate({ ...task, status, updatedAt: new Date().toISOString() })
    }

    const handlePriorityChange = (priority: TaskPriority) => {
        onUpdate({ ...task, priority, updatedAt: new Date().toISOString() })
    }

    const handleTitleSave = () => {
        if (editTitle.trim() !== task.title) {
            onUpdate({ ...task, title: editTitle.trim(), updatedAt: new Date().toISOString() })
        }
        setIsEditingTitle(false)
    }

    const handleDescriptionSave = () => {
        onUpdate({ ...task, description: editDescription, updatedAt: new Date().toISOString() })
        setIsEditingDescription(false)
    }

    const handleSubtasksUpdate = (subtasks: SubTask[]) => {
        onUpdate({ ...task, subtasks, updatedAt: new Date().toISOString() })
    }

    const handleLogTime = (hours: number, description: string, isBillable: boolean) => {
        const newEntry: TimeEntry = {
            id: `te-${Date.now()}`,
            date: new Date().toISOString().split("T")[0],
            hours,
            description,
            isBillable,
            userId: "current-user",
        }
        onUpdate({
            ...task,
            timeEntries: [...task.timeEntries, newEntry],
            actualHours: task.actualHours + hours,
            updatedAt: new Date().toISOString(),
        })
    }

    const handleAddComment = (text: string, parentId?: string) => {
        const newComment: Comment = {
            id: `c-${Date.now()}`,
            text,
            authorId: "current-user",
            authorName: "Current User",
            authorInitials: "CU",
            createdAt: new Date().toISOString(),
            parentId,
        }
        onUpdate({
            ...task,
            comments: [...task.comments, newComment],
            updatedAt: new Date().toISOString(),
        })
    }

    const handleDeleteComment = (id: string) => {
        onUpdate({
            ...task,
            comments: task.comments.filter((c) => c.id !== id),
            updatedAt: new Date().toISOString(),
        })
    }

    const handleAddReaction = (commentId: string, emoji: string) => {
        onUpdate({
            ...task,
            comments: task.comments.map((c) => {
                if (c.id !== commentId) return c
                const reactions = c.reactions || []
                const existing = reactions.find((r) => r.emoji === emoji)
                if (existing) {
                    if (existing.userIds.includes("current-user")) {
                        return {
                            ...c,
                            reactions: reactions.map((r) =>
                                r.emoji === emoji ? { ...r, userIds: r.userIds.filter((id) => id !== "current-user") } : r
                            ).filter((r) => r.userIds.length > 0),
                        }
                    }
                    return {
                        ...c,
                        reactions: reactions.map((r) =>
                            r.emoji === emoji ? { ...r, userIds: [...r.userIds, "current-user"] } : r
                        ),
                    }
                }
                return { ...c, reactions: [...reactions, { emoji, userIds: ["current-user"] }] }
            }),
        })
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(`${window.location.origin}/tasks/${task.id}`)
    }

    const getFileIcon = (type: string) => {
        if (type.includes("image")) return <Image className="w-4 h-4" />
        if (type.includes("pdf")) return <FileText className="w-4 h-4" />
        return <File className="w-4 h-4" />
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

            {/* Dialog Popup */}
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-2xl border border-border shadow-2xl animate-in zoom-in-95 fade-in duration-300 overflow-hidden">
                <ScrollArea className="h-full max-h-[90vh]">
                    {/* Header */}
                    <div className="sticky top-0 bg-background z-10 border-b border-border">
                        {/* Breadcrumb & Actions */}
                        <div className="flex items-center justify-between px-6 py-3">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>{task.projectName}</span>
                                <ChevronRight className="w-4 h-4" />
                                <span className="font-mono">{task.id}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Button variant="ghost" size="icon" onClick={() => setIsWatching(!isWatching)} title={isWatching ? "Unwatch" : "Watch"}>
                                    {isWatching ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </Button>
                                <Button variant="ghost" size="icon" onClick={handleCopyLink} title="Copy link">
                                    <Link2 className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" title="Archive">
                                    <Archive className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" title="Print">
                                    <Printer className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => onDelete(task.id)} title="Delete">
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                                <Separator orientation="vertical" className="h-6 mx-2" />
                                <Button variant="ghost" size="icon" onClick={onClose}>
                                    <X className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Status Stepper */}
                        <div className="px-6 pb-3">
                            <div className="flex items-center gap-2">
                                {Object.entries(STATUS_CONFIG).map(([status, config], i, arr) => (
                                    <div key={status} className="flex items-center">
                                        <button
                                            onClick={() => handleStatusChange(status as TaskStatus)}
                                            className={cn(
                                                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all",
                                                task.status === status
                                                    ? `${config.color} text-white`
                                                    : "bg-secondary text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            <div className={cn("w-2 h-2 rounded-full", task.status === status ? "bg-white" : config.color)} />
                                            {config.label}
                                        </button>
                                        {i < arr.length - 1 && <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="grid grid-cols-3 gap-6">
                            {/* Main Content */}
                            <div className="col-span-2 space-y-6">
                                {/* Title */}
                                {isEditingTitle ? (
                                    <Input
                                        autoFocus
                                        value={editTitle}
                                        onChange={(e) => setEditTitle(e.target.value)}
                                        onBlur={handleTitleSave}
                                        onKeyDown={(e) => e.key === "Enter" && handleTitleSave()}
                                        className="text-xl font-semibold"
                                    />
                                ) : (
                                    <h1
                                        onClick={() => setIsEditingTitle(true)}
                                        className="text-xl font-semibold cursor-text hover:bg-secondary/50 rounded px-2 py-1 -mx-2"
                                    >
                                        {task.title}
                                    </h1>
                                )}

                                {/* Blocked Warning */}
                                {task.isBlocked && (
                                    <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-sm">
                                        <AlertTriangle className="w-4 h-4" />
                                        <span>This task is blocked by: <strong>{task.dependencies.find(d => d.type === "blocked-by")?.taskTitle}</strong></span>
                                    </div>
                                )}

                                {/* Description */}
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-muted-foreground">Description</label>
                                    {isEditingDescription ? (
                                        <div className="space-y-2">
                                            <Textarea
                                                autoFocus
                                                value={editDescription}
                                                onChange={(e) => setEditDescription(e.target.value)}
                                                className="min-h-[150px]"
                                                placeholder="Add a description..."
                                            />
                                            <div className="flex gap-2">
                                                <Button size="sm" onClick={handleDescriptionSave}>Save</Button>
                                                <Button size="sm" variant="ghost" onClick={() => setIsEditingDescription(false)}>Cancel</Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div
                                            onClick={() => setIsEditingDescription(true)}
                                            className="prose prose-sm prose-invert max-w-none p-3 rounded-lg bg-secondary/30 cursor-text hover:bg-secondary/50 min-h-[80px]"
                                            dangerouslySetInnerHTML={{ __html: task.description || "<p class='text-muted-foreground'>Click to add description...</p>" }}
                                        />
                                    )}
                                </div>

                                {/* Tabs */}
                                <div className="flex gap-4 border-b border-border">
                                    {[
                                        { id: "details", label: "Details", icon: ListChecks },
                                        { id: "activity", label: "Activity", icon: Activity },
                                    ].map((tab) => (
                                        <button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id as any)}
                                            className={cn(
                                                "flex items-center gap-2 pb-2 px-1 text-sm font-medium transition-colors border-b-2 -mb-px",
                                                activeTab === tab.id
                                                    ? "border-primary text-primary"
                                                    : "border-transparent text-muted-foreground hover:text-foreground"
                                            )}
                                        >
                                            <tab.icon className="w-4 h-4" />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>

                                {activeTab === "details" && (
                                    <div className="space-y-6">
                                        {/* Reference Links - New Section */}
                                        <div className="space-y-3">
                                            <h3 className="text-sm font-medium flex items-center gap-2">
                                                <Link2 className="w-4 h-4" /> Reference Links ({task.referenceLinks?.length || 0})
                                            </h3>
                                            <div className="space-y-2">
                                                {task.referenceLinks?.map((link) => {
                                                    const getIcon = () => {
                                                        switch (link.type) {
                                                            case "figma": return <Figma className="w-4 h-4 text-purple-400" />
                                                            case "github": return <Github className="w-4 h-4 text-gray-400" />
                                                            case "doc": return <FileText className="w-4 h-4 text-blue-400" />
                                                            case "sheet": return <FileSpreadsheet className="w-4 h-4 text-green-400" />
                                                            default: return <Globe className="w-4 h-4 text-muted-foreground" />
                                                        }
                                                    }
                                                    return (
                                                        <a
                                                            key={link.id}
                                                            href={link.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-3 p-2.5 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group"
                                                        >
                                                            {getIcon()}
                                                            <div className="flex-1 min-w-0">
                                                                <p className="text-sm font-medium truncate">{link.title}</p>
                                                                <p className="text-xs text-muted-foreground truncate">{link.url}</p>
                                                            </div>
                                                            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                                        </a>
                                                    )
                                                })}
                                                {(!task.referenceLinks || task.referenceLinks.length === 0) && (
                                                    <p className="text-sm text-muted-foreground text-center py-3">No reference links yet</p>
                                                )}
                                                <Button variant="outline" size="sm" className="w-full gap-2 mt-2">
                                                    <Plus className="w-3 h-3" /> Add Reference Link
                                                </Button>
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Time Tracking - Compact Version */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-medium flex items-center gap-2">
                                                    <Clock className="w-4 h-4" /> Time
                                                </h3>
                                                <Button variant="ghost" size="sm" className="h-7 text-xs gap-1">
                                                    <Plus className="w-3 h-3" /> Log Time
                                                </Button>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between text-sm mb-1.5">
                                                        <span className="text-muted-foreground">Progress</span>
                                                        <span className="font-medium">{task.actualHours}h / {task.estimatedHours}h</span>
                                                    </div>
                                                    <Progress
                                                        value={task.estimatedHours > 0 ? (task.actualHours / task.estimatedHours) * 100 : 0}
                                                        className="h-2"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <Separator />

                                        {/* Subtasks */}
                                        <div className="space-y-3">
                                            <h3 className="text-sm font-medium flex items-center gap-2">
                                                <ListChecks className="w-4 h-4" /> Subtasks
                                            </h3>
                                            <SubtaskList subtasks={task.subtasks} onUpdate={handleSubtasksUpdate} />
                                        </div>

                                        <Separator />

                                        {/* Comments */}
                                        <div className="space-y-3">
                                            <h3 className="text-sm font-medium flex items-center gap-2">
                                                <MessageSquare className="w-4 h-4" /> Comments ({task.comments.length})
                                            </h3>
                                            <CommentThread
                                                comments={task.comments}
                                                currentUserId="current-user"
                                                onAddComment={handleAddComment}
                                                onDeleteComment={handleDeleteComment}
                                                onAddReaction={handleAddReaction}
                                            />
                                        </div>

                                        <Separator />

                                        {/* Attachments */}
                                        <div className="space-y-3">
                                            <h3 className="text-sm font-medium flex items-center gap-2">
                                                <Paperclip className="w-4 h-4" /> Attachments ({task.attachments.length})
                                            </h3>
                                            <div className="space-y-2">
                                                {task.attachments.map((att) => (
                                                    <div key={att.id} className="flex items-center gap-3 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors group">
                                                        {getFileIcon(att.type)}
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium truncate">{att.name}</p>
                                                            <p className="text-xs text-muted-foreground">{att.size} • {att.uploadedBy}</p>
                                                        </div>
                                                        <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100">
                                                            <ExternalLink className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                ))}
                                                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                                                    <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-2" />
                                                    <p className="text-sm text-muted-foreground">Drop files here or click to upload</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "activity" && (
                                    <div className="space-y-3">
                                        {task.activityLog.length === 0 ? (
                                            <p className="text-sm text-muted-foreground text-center py-4">No activity recorded yet</p>
                                        ) : (
                                            <div className="relative">
                                                <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
                                                {task.activityLog.map((entry) => (
                                                    <div key={entry.id} className="relative flex gap-4 pb-4">
                                                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center z-10">
                                                            <Activity className="w-4 h-4 text-muted-foreground" />
                                                        </div>
                                                        <div className="flex-1 pt-1">
                                                            <p className="text-sm">
                                                                <span className="font-medium">{entry.userName}</span>{" "}
                                                                <span className="text-muted-foreground">{entry.action}</span>
                                                                {entry.field && (
                                                                    <>
                                                                        {" "}<span className="font-medium">{entry.field}</span>
                                                                        {entry.oldValue && entry.newValue && (
                                                                            <span className="text-muted-foreground">
                                                                                {" "}from "{entry.oldValue}" to "{entry.newValue}"
                                                                            </span>
                                                                        )}
                                                                    </>
                                                                )}
                                                            </p>
                                                            <p className="text-xs text-muted-foreground mt-0.5">
                                                                {new Date(entry.timestamp).toLocaleString()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="space-y-4">
                                {/* Priority */}
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground">Priority</label>
                                    <Select value={task.priority} onValueChange={(v) => handlePriorityChange(v as TaskPriority)}>
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
                                                <SelectItem key={key} value={key}>
                                                    <div className="flex items-center gap-2">
                                                        <div className={cn("w-2 h-2 rounded-full", config.color)} />
                                                        {config.label}
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Assignees */}
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                                        <Users className="w-3 h-3" /> Assignees
                                    </label>
                                    <div className="space-y-2">
                                        {task.assignees.map((assignee) => (
                                            <div key={assignee.id} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30">
                                                <Avatar className="w-6 h-6">
                                                    <AvatarFallback className="bg-primary/20 text-primary text-[10px]">{assignee.initials}</AvatarFallback>
                                                </Avatar>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium truncate">{assignee.name}</p>
                                                    <p className="text-[10px] text-muted-foreground">{assignee.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                        <Button variant="outline" size="sm" className="w-full">
                                            <Users className="w-3 h-3 mr-1" /> Add Assignee
                                        </Button>
                                    </div>
                                </div>

                                {/* Dates */}
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> Dates
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="p-2 rounded-lg bg-secondary/30">
                                            <p className="text-[10px] text-muted-foreground">Start</p>
                                            <p className="text-sm">{task.startDate || "Not set"}</p>
                                        </div>
                                        <div className="p-2 rounded-lg bg-secondary/30">
                                            <p className="text-[10px] text-muted-foreground">Due</p>
                                            <p className="text-sm">{task.dueDate}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Tags */}
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground flex items-center gap-1">
                                        <Tag className="w-3 h-3" /> Tags
                                    </label>
                                    <div className="flex flex-wrap gap-1">
                                        {task.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                #{tag}
                                            </Badge>
                                        ))}
                                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                                            + Add
                                        </Button>
                                    </div>
                                </div>

                                {/* Dependencies */}
                                {task.dependencies.length > 0 && (
                                    <div className="space-y-2">
                                        <label className="text-xs font-medium text-muted-foreground">Dependencies</label>
                                        <div className="space-y-1">
                                            {task.dependencies.map((dep) => (
                                                <div key={dep.taskId} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30 text-sm">
                                                    <Badge variant="outline" className="text-[10px]">{dep.type}</Badge>
                                                    <span className="truncate">{dep.taskTitle}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Reporter */}
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-muted-foreground">Reporter</label>
                                    <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30">
                                        <Avatar className="w-6 h-6">
                                            <AvatarFallback className="bg-muted text-muted-foreground text-[10px]">
                                                {task.reporterName.split(" ").map((n) => n[0]).join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <span className="text-sm">{task.reporterName}</span>
                                    </div>
                                </div>

                                {/* Timestamps */}
                                <div className="text-xs text-muted-foreground space-y-1 pt-4 border-t border-border">
                                    <p>Created: {new Date(task.createdAt).toLocaleString()}</p>
                                    <p>Updated: {new Date(task.updatedAt).toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}
