"use client"

import { useMemo, useState } from "react"
import type { Employee } from "@/lib/types/hr"
import { DEPARTMENT_CONFIG } from "@/lib/types/hr"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, ChevronDown, ChevronRight, Maximize2, Minimize2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface OrgChartProps {
    employees: Employee[]
    onEmployeeClick: (employee: Employee) => void
}

interface OrgNode {
    employee: Employee
    children: OrgNode[]
}

export function OrgChart({ employees, onEmployeeClick }: OrgChartProps) {
    const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(employees.map(e => e.id)))
    const [isExpanded, setIsExpanded] = useState(true)

    // Build org tree
    const orgTree = useMemo(() => {
        const employeeMap = new Map<string, Employee>()
        employees.forEach(e => employeeMap.set(e.id, e))

        const buildTree = (emp: Employee): OrgNode => {
            const children = employees
                .filter(e => e.managerId === emp.id)
                .map(e => buildTree(e))
            return { employee: emp, children }
        }

        // Find root nodes (no manager or manager not in list)
        const roots = employees.filter(
            e => !e.managerId || !employeeMap.has(e.managerId)
        )

        return roots.map(root => buildTree(root))
    }, [employees])

    const toggleNode = (id: string) => {
        setExpandedNodes(prev => {
            const next = new Set(prev)
            if (next.has(id)) {
                next.delete(id)
            } else {
                next.add(id)
            }
            return next
        })
    }

    const toggleAll = () => {
        if (isExpanded) {
            setExpandedNodes(new Set())
        } else {
            setExpandedNodes(new Set(employees.map(e => e.id)))
        }
        setIsExpanded(!isExpanded)
    }

    const renderNode = (node: OrgNode, level: number = 0) => {
        const { employee, children } = node
        const hasChildren = children.length > 0
        const isNodeExpanded = expandedNodes.has(employee.id)
        const initials = `${employee.firstName[0]}${employee.lastName[0]}`
        const deptConfig = DEPARTMENT_CONFIG[employee.department]

        return (
            <div key={employee.id} className="relative">
                <div className={cn("flex items-start gap-2", level > 0 && "ml-8")}>
                    {/* Connector line */}
                    {level > 0 && (
                        <div className="absolute left-4 top-0 bottom-0 w-px bg-border -z-10" style={{ height: "calc(100% + 16px)", top: "-16px" }} />
                    )}

                    <div className="flex items-center gap-2">
                        {hasChildren && (
                            <button
                                onClick={() => toggleNode(employee.id)}
                                className="p-1 rounded hover:bg-secondary"
                            >
                                {isNodeExpanded ? (
                                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                ) : (
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                )}
                            </button>
                        )}
                        {!hasChildren && <div className="w-6" />}

                        <div
                            onClick={() => onEmployeeClick(employee)}
                            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary cursor-pointer transition-colors border border-border/50 hover:border-primary/50"
                        >
                            <Avatar className="w-10 h-10">
                                <AvatarFallback className="bg-primary/20 text-primary font-medium">
                                    {initials}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium text-sm">{employee.firstName} {employee.lastName}</p>
                                <p className="text-xs text-muted-foreground">{employee.jobTitle}</p>
                            </div>
                            <Badge className={cn("text-[10px] ml-2", deptConfig.bgColor, deptConfig.color)}>
                                {deptConfig.label}
                            </Badge>
                            {hasChildren && (
                                <Badge variant="secondary" className="text-[10px] ml-1">
                                    <Users className="w-3 h-3 mr-1" />
                                    {children.length}
                                </Badge>
                            )}
                        </div>
                    </div>
                </div>

                {/* Children */}
                {hasChildren && isNodeExpanded && (
                    <div className="mt-4 space-y-4 relative">
                        {children.map(child => renderNode(child, level + 1))}
                    </div>
                )}
            </div>
        )
    }

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-base font-medium">Organization Chart</CardTitle>
                <Button variant="ghost" size="sm" onClick={toggleAll}>
                    {isExpanded ? (
                        <><Minimize2 className="w-4 h-4 mr-2" /> Collapse All</>
                    ) : (
                        <><Maximize2 className="w-4 h-4 mr-2" /> Expand All</>
                    )}
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {orgTree.map(node => renderNode(node))}
                </div>

                {orgTree.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                        <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>No organizational structure defined</p>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
