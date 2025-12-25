"use client"

import { useState } from "react"
import type { SubTask } from "@/lib/types/task"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Plus, GripVertical, Trash2, User, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface SubtaskListProps {
    subtasks: SubTask[]
    onUpdate: (subtasks: SubTask[]) => void
}

export function SubtaskList({ subtasks, onUpdate }: SubtaskListProps) {
    const [newSubtaskTitle, setNewSubtaskTitle] = useState("")
    const [editingId, setEditingId] = useState<string | null>(null)

    const completedCount = subtasks.filter((s) => s.completed).length
    const progress = subtasks.length > 0 ? (completedCount / subtasks.length) * 100 : 0

    const handleToggle = (id: string) => {
        onUpdate(subtasks.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s)))
    }

    const handleAdd = () => {
        if (!newSubtaskTitle.trim()) return
        const newSubtask: SubTask = {
            id: `sub-${Date.now()}`,
            title: newSubtaskTitle.trim(),
            completed: false,
        }
        onUpdate([...subtasks, newSubtask])
        setNewSubtaskTitle("")
    }

    const handleDelete = (id: string) => {
        onUpdate(subtasks.filter((s) => s.id !== id))
    }

    const handleUpdateTitle = (id: string, title: string) => {
        onUpdate(subtasks.map((s) => (s.id === id ? { ...s, title } : s)))
        setEditingId(null)
    }

    const handleKeyDown = (e: React.KeyboardEvent, id?: string) => {
        if (e.key === "Enter") {
            e.preventDefault()
            if (id) {
                setEditingId(null)
            } else {
                handleAdd()
            }
        }
        if (e.key === "Escape") {
            setEditingId(null)
            setNewSubtaskTitle("")
        }
    }

    return (
        <div className="space-y-3">
            {/* Progress Header */}
            <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                    Subtasks ({completedCount}/{subtasks.length})
                </span>
                <span className="text-xs text-muted-foreground">{progress.toFixed(0)}% complete</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-secondary rounded-full h-1.5">
                <div
                    className="h-1.5 rounded-full bg-primary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                />
            </div>

            {/* Subtask List */}
            <div className="space-y-1">
                {subtasks.map((subtask, index) => (
                    <div
                        key={subtask.id}
                        className="group flex items-center gap-2 p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                        {/* Drag Handle */}
                        <GripVertical className="w-4 h-4 text-muted-foreground/50 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity" />

                        {/* Checkbox */}
                        <Checkbox
                            checked={subtask.completed}
                            onCheckedChange={() => handleToggle(subtask.id)}
                        />

                        {/* Title */}
                        {editingId === subtask.id ? (
                            <Input
                                autoFocus
                                defaultValue={subtask.title}
                                onBlur={(e) => handleUpdateTitle(subtask.id, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, subtask.id)}
                                className="flex-1 h-7 text-sm"
                            />
                        ) : (
                            <span
                                onClick={() => setEditingId(subtask.id)}
                                className={cn(
                                    "flex-1 text-sm cursor-text",
                                    subtask.completed && "line-through text-muted-foreground"
                                )}
                            >
                                {subtask.title}
                            </span>
                        )}

                        {/* Assignee Avatar (if assigned) */}
                        {subtask.assigneeId && (
                            <Avatar className="w-5 h-5">
                                <AvatarFallback className="bg-primary/20 text-primary text-[8px]">
                                    {subtask.assigneeId.slice(0, 2).toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                        )}

                        {/* Due Date (if set) */}
                        {subtask.dueDate && (
                            <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date(subtask.dueDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                            </span>
                        )}

                        {/* Delete Button */}
                        <button
                            onClick={() => handleDelete(subtask.id)}
                            className="p-1 rounded hover:bg-destructive/20 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-all"
                        >
                            <Trash2 className="w-3.5 h-3.5" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Add New Subtask */}
            <div className="flex items-center gap-2">
                <Plus className="w-4 h-4 text-muted-foreground" />
                <Input
                    value={newSubtaskTitle}
                    onChange={(e) => setNewSubtaskTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a subtask..."
                    className="flex-1 h-8 text-sm border-dashed"
                />
                {newSubtaskTitle && (
                    <Button size="sm" className="h-8" onClick={handleAdd}>
                        Add
                    </Button>
                )}
            </div>
        </div>
    )
}
