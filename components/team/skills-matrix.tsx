"use client"

import { useState, useMemo } from "react"
import type { Employee, SkillDefinition, ProficiencyLevel, SkillCategory } from "@/lib/types/hr"
import { PROFICIENCY_CONFIG } from "@/lib/types/hr"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Search,
    Filter,
    TrendingUp,
    Users,
    AlertTriangle,
    Zap,
    Target,
    Star,
    ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface SkillsMatrixProps {
    employees: Employee[]
    skillDefinitions: SkillDefinition[]
}

export function SkillsMatrix({ employees, skillDefinitions }: SkillsMatrixProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [categoryFilter, setCategoryFilter] = useState<string>("all")
    const [demandFilter, setDemandFilter] = useState<string>("all")
    const [activeTab, setActiveTab] = useState("matrix")

    // Aggregate skills across all employees
    const aggregatedSkills = useMemo(() => {
        const skillMap = new Map<string, { skill: SkillDefinition; employees: { employee: Employee; proficiency: ProficiencyLevel }[] }>()

        skillDefinitions.forEach(def => {
            skillMap.set(def.id, { skill: def, employees: [] })
        })

        employees.forEach(emp => {
            emp.skills.forEach(skill => {
                const entry = skillMap.get(skill.skillId)
                if (entry) {
                    entry.employees.push({ employee: emp, proficiency: skill.proficiency })
                }
            })
        })

        return Array.from(skillMap.values())
    }, [employees, skillDefinitions])

    const filteredSkills = aggregatedSkills.filter(({ skill }) => {
        const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = categoryFilter === "all" || skill.category === categoryFilter
        const matchesDemand = demandFilter === "all" || skill.demandLevel === demandFilter
        return matchesSearch && matchesCategory && matchesDemand
    })

    // Gap analysis
    const skillGaps = useMemo(() => {
        return aggregatedSkills
            .filter(({ skill, employees: emps }) => {
                const hasExperts = emps.some(e => e.proficiency === "expert")
                return (skill.demandLevel === "critical" || skill.demandLevel === "high") && !hasExperts
            })
            .map(({ skill, employees: emps }) => ({
                skill,
                coverage: emps.length,
                maxProficiency: emps.length > 0
                    ? Math.max(...emps.map(e => PROFICIENCY_CONFIG[e.proficiency].value))
                    : 0,
            }))
    }, [aggregatedSkills])

    // Smart recommendations
    const recommendations = useMemo(() => {
        return employees.map(emp => {
            const existingSkillIds = new Set(emp.skills.map(s => s.skillId))
            const suggestedSkills = skillDefinitions
                .filter(def => !existingSkillIds.has(def.id) && (def.demandLevel === "critical" || def.demandLevel === "high"))
                .slice(0, 3)

            return {
                employee: emp,
                suggestedSkills,
            }
        }).filter(r => r.suggestedSkills.length > 0)
    }, [employees, skillDefinitions])

    const getDemandBadge = (level: string) => {
        switch (level) {
            case "critical": return <Badge variant="destructive" className="text-[10px]">Critical</Badge>
            case "high": return <Badge className="bg-orange-500 text-[10px]">High</Badge>
            case "medium": return <Badge variant="secondary" className="text-[10px]">Medium</Badge>
            default: return <Badge variant="outline" className="text-[10px]">Low</Badge>
        }
    }

    return (
        <div className="space-y-4">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-primary/20">
                                <Zap className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{skillDefinitions.length}</p>
                                <p className="text-xs text-muted-foreground">Total Skills</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-green-500/20">
                                <Star className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">
                                    {employees.reduce((sum, e) => sum + e.skills.filter(s => s.proficiency === "expert").length, 0)}
                                </p>
                                <p className="text-xs text-muted-foreground">Expert-level Skills</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-yellow-500/20">
                                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">{skillGaps.length}</p>
                                <p className="text-xs text-muted-foreground">Skill Gaps</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-blue-500/20">
                                <Users className="w-5 h-5 text-blue-500" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold">
                                    {(employees.reduce((sum, e) => sum + e.skills.length, 0) / employees.length).toFixed(1)}
                                </p>
                                <p className="text-xs text-muted-foreground">Avg Skills/Person</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList>
                    <TabsTrigger value="matrix">Skills Matrix</TabsTrigger>
                    <TabsTrigger value="gaps">
                        Gap Analysis
                        {skillGaps.length > 0 && (
                            <Badge variant="destructive" className="ml-2 h-5 w-5 p-0 justify-center">{skillGaps.length}</Badge>
                        )}
                    </TabsTrigger>
                    <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
                </TabsList>

                <TabsContent value="matrix" className="space-y-4 mt-4">
                    {/* Filters */}
                    <div className="flex items-center gap-4">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search skills..."
                                className="pl-10"
                            />
                        </div>
                        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                            <SelectTrigger className="w-40"><SelectValue placeholder="Category" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="technical">Technical</SelectItem>
                                <SelectItem value="design">Design</SelectItem>
                                <SelectItem value="management">Management</SelectItem>
                                <SelectItem value="soft-skills">Soft Skills</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select value={demandFilter} onValueChange={setDemandFilter}>
                            <SelectTrigger className="w-40"><SelectValue placeholder="Demand" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Demand</SelectItem>
                                <SelectItem value="critical">Critical</SelectItem>
                                <SelectItem value="high">High</SelectItem>
                                <SelectItem value="medium">Medium</SelectItem>
                                <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid gap-4 md:grid-cols-2">
                        {filteredSkills.map(({ skill, employees: emps }) => (
                            <Card key={skill.id}>
                                <CardContent className="pt-4">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <p className="font-medium">{skill.name}</p>
                                            <p className="text-xs text-muted-foreground capitalize">{skill.category}</p>
                                        </div>
                                        {getDemandBadge(skill.demandLevel)}
                                    </div>

                                    {emps.length === 0 ? (
                                        <p className="text-sm text-muted-foreground text-center py-2">No team members with this skill</p>
                                    ) : (
                                        <div className="space-y-2">
                                            {emps.slice(0, 4).map(({ employee, proficiency }) => {
                                                const profConfig = PROFICIENCY_CONFIG[proficiency]
                                                const initials = `${employee.firstName[0]}${employee.lastName[0]}`
                                                return (
                                                    <div key={employee.id} className="flex items-center gap-2">
                                                        <Avatar className="w-6 h-6">
                                                            <AvatarFallback className="bg-primary/20 text-primary text-[10px]">{initials}</AvatarFallback>
                                                        </Avatar>
                                                        <span className="text-sm flex-1">{employee.firstName} {employee.lastName}</span>
                                                        <Badge className={cn("text-[10px] text-white", profConfig.color)}>{profConfig.label}</Badge>
                                                    </div>
                                                )
                                            })}
                                            {emps.length > 4 && (
                                                <p className="text-xs text-muted-foreground text-center">+{emps.length - 4} more</p>
                                            )}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="gaps" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                                Critical Skill Gaps
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            {skillGaps.length === 0 ? (
                                <div className="text-center py-8 text-muted-foreground">
                                    <Target className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                    <p>No critical skill gaps identified!</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {skillGaps.map(({ skill, coverage, maxProficiency }) => (
                                        <div key={skill.id} className="p-4 rounded-lg bg-secondary/30">
                                            <div className="flex items-center justify-between mb-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-medium">{skill.name}</span>
                                                    {getDemandBadge(skill.demandLevel)}
                                                </div>
                                                <Badge variant="outline">{coverage} people</Badge>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-muted-foreground">Max Proficiency:</span>
                                                <Progress value={maxProficiency} className="h-2 flex-1" />
                                                <span className="text-xs text-muted-foreground">{maxProficiency}%</span>
                                            </div>
                                            <p className="text-xs text-yellow-500 mt-2">
                                                ⚠️ No expert available. Consider training or hiring.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-4 mt-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-primary" />
                                Skill Development Recommendations
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {recommendations.map(({ employee, suggestedSkills }) => {
                                    const initials = `${employee.firstName[0]}${employee.lastName[0]}`
                                    return (
                                        <div key={employee.id} className="p-4 rounded-lg bg-secondary/30">
                                            <div className="flex items-center gap-3 mb-3">
                                                <Avatar className="w-8 h-8">
                                                    <AvatarFallback className="bg-primary/20 text-primary text-xs">{initials}</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="font-medium text-sm">{employee.firstName} {employee.lastName}</p>
                                                    <p className="text-xs text-muted-foreground">{employee.jobTitle}</p>
                                                </div>
                                            </div>
                                            <p className="text-xs text-muted-foreground mb-2">Suggested skills to develop:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {suggestedSkills.map(skill => (
                                                    <Badge key={skill.id} variant="outline" className="gap-1">
                                                        <ChevronRight className="w-3 h-3" />
                                                        {skill.name}
                                                        {getDemandBadge(skill.demandLevel)}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}
