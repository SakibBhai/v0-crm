"use client"

import { useState } from "react"
import type { Task } from "@/lib/types/task"
import { PRIORITY_CONFIG, STATUS_CONFIG, TASK_TYPE_CONFIG } from "@/lib/types/task"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Clock,
    Link2,
    MoreVertical,
    Paperclip,
    ListChecks,
    AlertTriangle,
    Copy,
    Trash2,
    ArrowUp,
    MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface TaskCardProps {
    task: Task
    onClick: () => void
    onDelete?: (id: string) => void
    onClone?: (task: Task) => void
    onMoveToTop?: (id: string) => void
}

export function TaskCard({ task, onClick, onDelete, onClone, onMoveToTop }: TaskCardProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const priorityConfig = PRIORITY_CONFIG[task.priority]
    const completedSubtasks = task.subtasks.filter((s) => s.completed).length
    const totalSubtasks = task.subtasks.length
    const isOverdue = new Date(task.dueDate) < new Date() && task.status !== "done"

    const handleCopyLink = (e: React.MouseEvent) => {
        e.stopPropagation()
        navigator.clipboard.writeText(`${window.location.origin}/tasks/${task.id}`)
    }

    return (
        <div
            onClick={onClick}
            className={cn(
                "bg-card rounded-lg p-3 border-l-4 cursor-pointer transition-all duration-200",
                "hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5",
                "border-t border-r border-b border-border/50",
                priorityConfig.border
            )}
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-2">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono text-muted-foreground">{task.id}</span>
                        {task.isBlocked && (
                            <AlertTriangle className="w-3 h-3 text-destructive" />
                        )}
                    </div>
                    <h4 className="text-sm font-medium line-clamp-2">{task.title}</h4>
                </div>
                <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <DropdownMenuTrigger
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded hover:bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <MoreVertical className="w-4 h-4 text-muted-foreground" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
                        <DropdownMenuItem onClick={() => onMoveToTop?.(task.id)}>
                            <ArrowUp className="w-4 h-4 mr-2" /> Move to Top
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => onClone?.(task)}>
                            <Copy className="w-4 h-4 mr-2" /> Clone Task
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handleCopyLink}>
                            <Link2 className="w-4 h-4 mr-2" /> Copy Link
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            onClick={() => onDelete?.(task.id)}
                            className="text-destructive focus:text-destructive"
                        >
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Project, Task Type & Priority */}
            <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant="outline" className="text-[10px] font-normal">
                    {task.projectName}
                </Badge>
                {task.taskType && TASK_TYPE_CONFIG[task.taskType] && (
                    <Badge variant="outline" className="text-[10px] font-normal gap-1">
                        <span>{TASK_TYPE_CONFIG[task.taskType].icon}</span>
                        {TASK_TYPE_CONFIG[task.taskType].label}
                    </Badge>
                )}
                <Badge className={cn("text-[10px] text-white border-0", priorityConfig.color)}>
                    {priorityConfig.label}
                </Badge>
            </div>

            {/* Subtask Progress */}
            {totalSubtasks > 0 && (
                <div className="mb-2">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                        <span className="flex items-center gap-1">
                            <ListChecks className="w-3 h-3" />
                            Subtasks
                        </span>
                        <span>{completedSubtasks}/{totalSubtasks}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-1">
                        <div
                            className="bg-primary h-1 rounded-full transition-all"
                            style={{ width: `${(completedSubtasks / totalSubtasks) * 100}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Tags */}
            {task.tags.length > 0 && (
                <div className="flex gap-1 mb-2 flex-wrap">
                    {task.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded"
                        >
                            #{tag}
                        </span>
                    ))}
                    {task.tags.length > 3 && (
                        <span className="text-[10px] text-muted-foreground">+{task.tags.length - 3}</span>
                    )}
                </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-border/30">
                <div className="flex items-center gap-2">
                    {/* Due Date */}
                    <div className={cn("flex items-center gap-1 text-xs", isOverdue ? "text-destructive" : "text-muted-foreground")}>
                        <Clock className="w-3 h-3" />
                        <span>{new Date(task.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                    </div>
                    {/* Indicators */}
                    <div className="flex items-center gap-1">
                        {task.attachments.length > 0 && (
                            <Paperclip className="w-3 h-3 text-muted-foreground" />
                        )}
                        {task.comments.length > 0 && (
                            <div className="flex items-center gap-0.5 text-muted-foreground">
                                <MessageSquare className="w-3 h-3" />
                                <span className="text-[10px]">{task.comments.length}</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Assignees */}
                <div className="flex -space-x-1.5">
                    {task.assignees.slice(0, 2).map((assignee) => (
                        <Avatar key={assignee.id} className="w-5 h-5 border border-card">
                            <AvatarFallback className="bg-primary/20 text-primary text-[8px]">
                                {assignee.initials}
                            </AvatarFallback>
                        </Avatar>
                    ))}
                    {task.assignees.length > 2 && (
                        <div className="w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-[8px] border border-card">
                            +{task.assignees.length - 2}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
