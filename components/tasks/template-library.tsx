"use client"

import { useState } from "react"
import type { TaskTemplate } from "@/lib/types/task"
import { PRIORITY_CONFIG } from "@/lib/types/task"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Plus, Copy, Trash2, FileText, ListChecks, Clock, Tag, Edit2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface TemplateLibraryProps {
    templates: TaskTemplate[]
    onUpdate: (templates: TaskTemplate[]) => void
    onUseTemplate: (template: TaskTemplate) => void
}

export function TemplateLibrary({ templates, onUpdate, onUseTemplate }: TemplateLibraryProps) {
    const [isCreating, setIsCreating] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [formData, setFormData] = useState<Partial<TaskTemplate>>({
        name: "",
        description: "",
        subtasks: [],
        estimatedHours: 0,
        tags: [],
        priority: "medium",
    })
    const [newSubtask, setNewSubtask] = useState("")
    const [newTag, setNewTag] = useState("")

    const resetForm = () => {
        setFormData({ name: "", description: "", subtasks: [], estimatedHours: 0, tags: [], priority: "medium" })
        setNewSubtask("")
        setNewTag("")
    }

    const handleSave = () => {
        if (!formData.name?.trim()) return

        if (editingId) {
            onUpdate(templates.map((t) => (t.id === editingId ? { ...t, ...formData } as TaskTemplate : t)))
        } else {
            const newTemplate: TaskTemplate = {
                id: `tpl-${Date.now()}`,
                name: formData.name,
                description: formData.description || "",
                subtasks: formData.subtasks || [],
                estimatedHours: formData.estimatedHours || 0,
                tags: formData.tags || [],
                priority: formData.priority || "medium",
            }
            onUpdate([...templates, newTemplate])
        }

        setIsCreating(false)
        setEditingId(null)
        resetForm()
    }

    const handleEdit = (template: TaskTemplate) => {
        setFormData(template)
        setEditingId(template.id)
        setIsCreating(true)
    }

    const handleDelete = (id: string) => {
        onUpdate(templates.filter((t) => t.id !== id))
    }

    const addSubtask = () => {
        if (!newSubtask.trim()) return
        setFormData({
            ...formData,
            subtasks: [...(formData.subtasks || []), { title: newSubtask.trim() }],
        })
        setNewSubtask("")
    }

    const removeSubtask = (index: number) => {
        setFormData({
            ...formData,
            subtasks: formData.subtasks?.filter((_, i) => i !== index),
        })
    }

    const addTag = () => {
        if (!newTag.trim() || formData.tags?.includes(newTag.trim())) return
        setFormData({
            ...formData,
            tags: [...(formData.tags || []), newTag.trim()],
        })
        setNewTag("")
    }

    const removeTag = (tag: string) => {
        setFormData({
            ...formData,
            tags: formData.tags?.filter((t) => t !== tag),
        })
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold">Task Templates</h3>
                    <p className="text-sm text-muted-foreground">Save and reuse task configurations for common workflows</p>
                </div>
                <Button onClick={() => { resetForm(); setIsCreating(true) }} className="gap-2">
                    <Plus className="w-4 h-4" /> New Template
                </Button>
            </div>

            {/* Template Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => (
                    <Card key={template.id} className="group hover:border-primary/50 transition-colors">
                        <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-2">
                                    <FileText className="w-4 h-4 text-primary" />
                                    <CardTitle className="text-base">{template.name}</CardTitle>
                                </div>
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => handleEdit(template)}>
                                        <Edit2 className="w-3 h-3" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => handleDelete(template.id)}>
                                        <Trash2 className="w-3 h-3" />
                                    </Button>
                                </div>
                            </div>
                            <CardDescription className="text-xs line-clamp-2">{template.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <span className="flex items-center gap-1">
                                    <ListChecks className="w-3 h-3" />
                                    {template.subtasks.length} subtasks
                                </span>
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {template.estimatedHours}h
                                </span>
                                <Badge className={cn("text-[10px] text-white border-0", PRIORITY_CONFIG[template.priority].color)}>
                                    {template.priority}
                                </Badge>
                            </div>

                            {template.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1">
                                    {template.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="text-[10px]">
                                            #{tag}
                                        </Badge>
                                    ))}
                                </div>
                            )}

                            <Button
                                className="w-full gap-2"
                                variant="outline"
                                size="sm"
                                onClick={() => onUseTemplate(template)}
                            >
                                <Copy className="w-3 h-3" /> Use Template
                            </Button>
                        </CardContent>
                    </Card>
                ))}

                {templates.length === 0 && (
                    <Card className="col-span-full border-dashed">
                        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                            <FileText className="w-10 h-10 text-muted-foreground mb-3" />
                            <p className="text-muted-foreground">No templates yet</p>
                            <p className="text-sm text-muted-foreground mb-4">Create templates to standardize your workflows</p>
                            <Button onClick={() => setIsCreating(true)} variant="outline">
                                <Plus className="w-4 h-4 mr-2" /> Create First Template
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Create/Edit Dialog */}
            <Dialog open={isCreating} onOpenChange={(open) => { if (!open) { setIsCreating(false); setEditingId(null); resetForm(); } }}>
                <DialogContent className="max-w-lg">
                    <DialogHeader>
                        <DialogTitle>{editingId ? "Edit Template" : "Create Template"}</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium">Template Name</label>
                            <Input
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g., New Feature Development"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-medium">Description</label>
                            <Textarea
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Brief description of what this template is for..."
                                rows={2}
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium">Estimated Hours</label>
                                <Input
                                    type="number"
                                    value={formData.estimatedHours}
                                    onChange={(e) => setFormData({ ...formData, estimatedHours: Number(e.target.value) })}
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Priority</label>
                                <Select
                                    value={formData.priority}
                                    onValueChange={(v) => setFormData({ ...formData, priority: v as any })}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(PRIORITY_CONFIG).map(([key, config]) => (
                                            <SelectItem key={key} value={key}>{config.label}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Subtasks</label>
                            <div className="space-y-2 mt-1">
                                {formData.subtasks?.map((subtask, index) => (
                                    <div key={index} className="flex items-center gap-2 p-2 rounded bg-secondary/30">
                                        <ListChecks className="w-4 h-4 text-muted-foreground" />
                                        <span className="flex-1 text-sm">{subtask.title}</span>
                                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeSubtask(index)}>
                                            <Trash2 className="w-3 h-3" />
                                        </Button>
                                    </div>
                                ))}
                                <div className="flex gap-2">
                                    <Input
                                        value={newSubtask}
                                        onChange={(e) => setNewSubtask(e.target.value)}
                                        placeholder="Add subtask..."
                                        onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSubtask())}
                                    />
                                    <Button variant="outline" size="icon" onClick={addSubtask}>
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-medium">Tags</label>
                            <div className="flex flex-wrap gap-1 mb-2">
                                {formData.tags?.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="gap-1">
                                        #{tag}
                                        <button onClick={() => removeTag(tag)} className="ml-1 hover:text-destructive">×</button>
                                    </Badge>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Input
                                    value={newTag}
                                    onChange={(e) => setNewTag(e.target.value)}
                                    placeholder="Add tag..."
                                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                                />
                                <Button variant="outline" size="icon" onClick={addTag}>
                                    <Tag className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="ghost" onClick={() => { setIsCreating(false); setEditingId(null); resetForm(); }}>
                            Cancel
                        </Button>
                        <Button onClick={handleSave}>{editingId ? "Save Changes" : "Create Template"}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
