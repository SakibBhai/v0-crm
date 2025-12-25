"use client"

import { useState } from "react"
import type { AutomationRule } from "@/lib/types/task"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Plus, Trash2, Zap, ArrowRight, Bell, Archive, AlertTriangle, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface WorkflowAutomationProps {
    rules: AutomationRule[]
    onUpdate: (rules: AutomationRule[]) => void
}

const TRIGGERS = [
    { value: "status-change", label: "Status changes to", icon: CheckCircle2 },
    { value: "due-date-passed", label: "Due date has passed", icon: AlertTriangle },
    { value: "priority-change", label: "Priority changes to", icon: Zap },
    { value: "assigned", label: "Task is assigned", icon: Bell },
]

const ACTIONS = [
    { value: "change-status", label: "Change status to", icon: CheckCircle2 },
    { value: "change-priority", label: "Change priority to", icon: Zap },
    { value: "notify", label: "Send notification", icon: Bell },
    { value: "create-task", label: "Create follow-up task", icon: Plus },
    { value: "archive", label: "Archive task", icon: Archive },
]

const STATUS_OPTIONS = ["backlog", "todo", "in-progress", "in-review", "done"]
const PRIORITY_OPTIONS = ["low", "medium", "high", "critical"]

export function WorkflowAutomation({ rules, onUpdate }: WorkflowAutomationProps) {
    const [isCreating, setIsCreating] = useState(false)
    const [newRule, setNewRule] = useState<Partial<AutomationRule>>({
        name: "",
        trigger: { type: "status-change" },
        action: { type: "notify" },
        isActive: true,
    })

    const handleToggle = (ruleId: string) => {
        onUpdate(rules.map((r) => (r.id === ruleId ? { ...r, isActive: !r.isActive } : r)))
    }

    const handleDelete = (ruleId: string) => {
        onUpdate(rules.filter((r) => r.id !== ruleId))
    }

    const handleCreate = () => {
        if (!newRule.name?.trim()) return
        const rule: AutomationRule = {
            id: `rule-${Date.now()}`,
            name: newRule.name,
            trigger: newRule.trigger as AutomationRule["trigger"],
            action: newRule.action as AutomationRule["action"],
            isActive: true,
        }
        onUpdate([...rules, rule])
        setNewRule({ name: "", trigger: { type: "status-change" }, action: { type: "notify" }, isActive: true })
        setIsCreating(false)
    }

    const getTriggerNeedsValue = (type: string) => ["status-change", "priority-change"].includes(type)
    const getActionNeedsValue = (type: string) => ["change-status", "change-priority"].includes(type)

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold">Workflow Automation</h3>
                    <p className="text-sm text-muted-foreground">Create "If This, Then That" rules to automate repetitive tasks</p>
                </div>
                <Button onClick={() => setIsCreating(true)} className="gap-2">
                    <Plus className="w-4 h-4" /> New Rule
                </Button>
            </div>

            {/* Existing Rules */}
            <div className="grid gap-3">
                {rules.map((rule) => {
                    const trigger = TRIGGERS.find((t) => t.value === rule.trigger.type)
                    const action = ACTIONS.find((a) => a.value === rule.action.type)

                    return (
                        <Card key={rule.id} className={cn("transition-opacity", !rule.isActive && "opacity-50")}>
                            <CardContent className="pt-4">
                                <div className="flex items-center gap-4">
                                    <Switch checked={rule.isActive} onCheckedChange={() => handleToggle(rule.id)} />

                                    <div className="flex-1 flex items-center gap-3">
                                        {/* Trigger */}
                                        <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
                                            {trigger && <trigger.icon className="w-4 h-4 text-primary" />}
                                            <span className="text-sm font-medium">When</span>
                                            <Badge variant="outline">{trigger?.label}</Badge>
                                            {rule.trigger.value && <Badge>{rule.trigger.value}</Badge>}
                                        </div>

                                        <ArrowRight className="w-4 h-4 text-muted-foreground" />

                                        {/* Action */}
                                        <div className="flex items-center gap-2 p-2 rounded-lg bg-primary/10">
                                            {action && <action.icon className="w-4 h-4 text-primary" />}
                                            <span className="text-sm font-medium">Then</span>
                                            <Badge variant="outline">{action?.label}</Badge>
                                            {rule.action.value && <Badge>{rule.action.value}</Badge>}
                                        </div>
                                    </div>

                                    <Button variant="ghost" size="icon" onClick={() => handleDelete(rule.id)} className="text-destructive hover:text-destructive">
                                        <Trash2 className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    )
                })}

                {rules.length === 0 && !isCreating && (
                    <Card className="border-dashed">
                        <CardContent className="flex flex-col items-center justify-center py-8 text-center">
                            <Zap className="w-10 h-10 text-muted-foreground mb-3" />
                            <p className="text-muted-foreground">No automation rules yet</p>
                            <p className="text-sm text-muted-foreground mb-4">Create rules to automate your workflow</p>
                            <Button onClick={() => setIsCreating(true)} variant="outline">
                                <Plus className="w-4 h-4 mr-2" /> Create First Rule
                            </Button>
                        </CardContent>
                    </Card>
                )}
            </div>

            {/* Create New Rule */}
            {isCreating && (
                <Card className="border-primary/50">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-base">Create Automation Rule</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Input
                            placeholder="Rule name (e.g., 'Auto-archive completed tasks')"
                            value={newRule.name}
                            onChange={(e) => setNewRule({ ...newRule, name: e.target.value })}
                        />

                        <div className="grid grid-cols-2 gap-4">
                            {/* Trigger */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium">When this happens...</label>
                                <Select
                                    value={newRule.trigger?.type}
                                    onValueChange={(v) => setNewRule({ ...newRule, trigger: { type: v as any, value: undefined } })}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {TRIGGERS.map((t) => (
                                            <SelectItem key={t.value} value={t.value}>
                                                <div className="flex items-center gap-2">
                                                    <t.icon className="w-4 h-4" />
                                                    {t.label}
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {getTriggerNeedsValue(newRule.trigger?.type || "") && (
                                    <Select
                                        value={newRule.trigger?.value}
                                        onValueChange={(v) => setNewRule({ ...newRule, trigger: { ...newRule.trigger!, value: v } })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select value..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {(newRule.trigger?.type === "status-change" ? STATUS_OPTIONS : PRIORITY_OPTIONS).map((opt) => (
                                                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            </div>

                            {/* Action */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Do this...</label>
                                <Select
                                    value={newRule.action?.type}
                                    onValueChange={(v) => setNewRule({ ...newRule, action: { type: v as any, value: undefined } })}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {ACTIONS.map((a) => (
                                            <SelectItem key={a.value} value={a.value}>
                                                <div className="flex items-center gap-2">
                                                    <a.icon className="w-4 h-4" />
                                                    {a.label}
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {getActionNeedsValue(newRule.action?.type || "") && (
                                    <Select
                                        value={newRule.action?.value}
                                        onValueChange={(v) => setNewRule({ ...newRule, action: { ...newRule.action!, value: v } })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select value..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {(newRule.action?.type === "change-status" ? STATUS_OPTIONS : PRIORITY_OPTIONS).map((opt) => (
                                                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 pt-2">
                            <Button variant="ghost" onClick={() => setIsCreating(false)}>Cancel</Button>
                            <Button onClick={handleCreate}>Create Rule</Button>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
