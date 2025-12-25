"use client"

import { useState } from "react"
import type { Candidate, CandidateStage } from "@/lib/types/hr"
import { CANDIDATE_STAGE_CONFIG, DEPARTMENT_CONFIG } from "@/lib/types/hr"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Plus,
    Search,
    MoreVertical,
    Mail,
    Phone,
    Calendar,
    DollarSign,
    FileText,
    Star,
    ChevronRight,
    Trash2,
    UserPlus,
    MessageSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface ApplicantTrackerProps {
    candidates: Candidate[]
    onUpdateCandidate: (candidate: Candidate) => void
    onAddCandidate: (candidate: Omit<Candidate, "id" | "appliedAt" | "interviews" | "notes" | "rating">) => void
}

const STAGES: CandidateStage[] = ["applied", "screening", "interview", "offer", "hired"]

export function ApplicantTracker({ candidates, onUpdateCandidate, onAddCandidate }: ApplicantTrackerProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [draggedCandidate, setDraggedCandidate] = useState<Candidate | null>(null)
    const [dragOverStage, setDragOverStage] = useState<CandidateStage | null>(null)
    const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)

    const filteredCandidates = candidates.filter(
        c => c.stage !== "rejected" && (
            c.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.position.toLowerCase().includes(searchQuery.toLowerCase())
        )
    )

    const getCandidatesForStage = (stage: CandidateStage) =>
        filteredCandidates.filter(c => c.stage === stage)

    const handleDragStart = (e: React.DragEvent, candidate: Candidate) => {
        setDraggedCandidate(candidate)
        e.dataTransfer.effectAllowed = "move"
    }

    const handleDragOver = (e: React.DragEvent, stage: CandidateStage) => {
        e.preventDefault()
        setDragOverStage(stage)
    }

    const handleDrop = (e: React.DragEvent, stage: CandidateStage) => {
        e.preventDefault()
        if (draggedCandidate && draggedCandidate.stage !== stage) {
            onUpdateCandidate({ ...draggedCandidate, stage })
        }
        setDraggedCandidate(null)
        setDragOverStage(null)
    }

    const handleReject = (candidate: Candidate) => {
        onUpdateCandidate({ ...candidate, stage: "rejected" })
    }

    const formatDate = (date: string) =>
        new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" })

    const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        onAddCandidate({
            firstName: formData.get("firstName") as string,
            lastName: formData.get("lastName") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            position: formData.get("position") as string,
            department: formData.get("department") as any,
            stage: "applied",
            source: formData.get("source") as string,
            skills: (formData.get("skills") as string).split(",").map(s => s.trim()),
        })
        setIsAddDialogOpen(false)
    }

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search candidates..."
                            className="pl-10 w-64"
                        />
                    </div>
                    <Badge variant="secondary">{filteredCandidates.length} candidates</Badge>
                </div>
                <Button onClick={() => setIsAddDialogOpen(true)} className="gap-2">
                    <Plus className="w-4 h-4" /> Add Candidate
                </Button>
            </div>

            {/* Kanban Board */}
            <div className="grid grid-cols-5 gap-4">
                {STAGES.map(stage => {
                    const stageConfig = CANDIDATE_STAGE_CONFIG[stage]
                    const stageCandidates = getCandidatesForStage(stage)
                    const isDragOver = dragOverStage === stage

                    return (
                        <div
                            key={stage}
                            className="space-y-3"
                            onDragOver={(e) => handleDragOver(e, stage)}
                            onDragLeave={() => setDragOverStage(null)}
                            onDrop={(e) => handleDrop(e, stage)}
                        >
                            {/* Stage Header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className={cn("w-2 h-2 rounded-full", stageConfig.color)} />
                                    <span className="font-medium text-sm">{stageConfig.label}</span>
                                </div>
                                <Badge variant="secondary" className="text-xs">{stageCandidates.length}</Badge>
                            </div>

                            {/* Drop Zone */}
                            <div
                                className={cn(
                                    "min-h-[500px] rounded-lg p-2 space-y-2 transition-all",
                                    isDragOver
                                        ? "bg-primary/10 ring-2 ring-primary ring-dashed"
                                        : "bg-secondary/30"
                                )}
                            >
                                {stageCandidates.map(candidate => {
                                    const initials = `${candidate.firstName[0]}${candidate.lastName[0]}`
                                    const deptConfig = DEPARTMENT_CONFIG[candidate.department]

                                    return (
                                        <Card
                                            key={candidate.id}
                                            draggable
                                            onDragStart={(e) => handleDragStart(e, candidate)}
                                            onClick={() => setSelectedCandidate(candidate)}
                                            className="cursor-pointer hover:shadow-md transition-shadow"
                                        >
                                            <CardContent className="p-3">
                                                <div className="flex items-start justify-between gap-2">
                                                    <div className="flex items-center gap-2">
                                                        <Avatar className="w-8 h-8">
                                                            <AvatarFallback className="bg-primary/20 text-primary text-xs">
                                                                {initials}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div>
                                                            <p className="font-medium text-sm">{candidate.firstName} {candidate.lastName}</p>
                                                            <p className="text-xs text-muted-foreground">{candidate.position}</p>
                                                        </div>
                                                    </div>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
                                                            <Button variant="ghost" size="icon" className="h-6 w-6">
                                                                <MoreVertical className="w-3 h-3" />
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end">
                                                            <DropdownMenuItem>
                                                                <MessageSquare className="w-3 h-3 mr-2" /> Schedule Interview
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                <Mail className="w-3 h-3 mr-2" /> Send Email
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem
                                                                onClick={(e) => { e.stopPropagation(); handleReject(candidate) }}
                                                                className="text-destructive"
                                                            >
                                                                <Trash2 className="w-3 h-3 mr-2" /> Reject
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>

                                                <div className="mt-2 flex flex-wrap gap-1">
                                                    <Badge className={cn("text-[10px]", deptConfig.bgColor, deptConfig.color)}>
                                                        {deptConfig.label}
                                                    </Badge>
                                                    {candidate.rating > 0 && (
                                                        <Badge variant="secondary" className="text-[10px] gap-0.5">
                                                            <Star className="w-2.5 h-2.5" /> {candidate.rating}
                                                        </Badge>
                                                    )}
                                                </div>

                                                <div className="mt-2 flex items-center justify-between text-[10px] text-muted-foreground">
                                                    <span>{candidate.source}</span>
                                                    <span>{formatDate(candidate.appliedAt)}</span>
                                                </div>

                                                {candidate.interviews.length > 0 && (
                                                    <div className="mt-2 pt-2 border-t border-border flex items-center gap-1 text-[10px] text-muted-foreground">
                                                        <Calendar className="w-3 h-3" />
                                                        <span>
                                                            {candidate.interviews.filter(i => i.status === "scheduled").length} scheduled
                                                        </span>
                                                    </div>
                                                )}
                                            </CardContent>
                                        </Card>
                                    )
                                })}

                                {stage === "applied" && (
                                    <Button
                                        variant="ghost"
                                        className="w-full border-2 border-dashed border-border/50 py-6 text-muted-foreground"
                                        onClick={() => setIsAddDialogOpen(true)}
                                    >
                                        <Plus className="w-4 h-4 mr-2" /> Add Candidate
                                    </Button>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Candidate Detail Dialog */}
            <Dialog open={!!selectedCandidate} onOpenChange={() => setSelectedCandidate(null)}>
                <DialogContent className="max-w-lg">
                    {selectedCandidate && (
                        <>
                            <DialogHeader>
                                <DialogTitle>{selectedCandidate.firstName} {selectedCandidate.lastName}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm">{selectedCandidate.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm">{selectedCandidate.phone}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Position</p>
                                    <p className="font-medium">{selectedCandidate.position}</p>
                                </div>
                                {selectedCandidate.expectedSalary && (
                                    <div className="flex items-center gap-2">
                                        <DollarSign className="w-4 h-4 text-muted-foreground" />
                                        <span className="text-sm">Expected: ${selectedCandidate.expectedSalary.toLocaleString()}</span>
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm text-muted-foreground mb-2">Skills</p>
                                    <div className="flex flex-wrap gap-1">
                                        {selectedCandidate.skills.map(skill => (
                                            <Badge key={skill} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>
                                {selectedCandidate.notes.length > 0 && (
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-2">Notes</p>
                                        <ul className="text-sm space-y-1">
                                            {selectedCandidate.notes.map((note, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <ChevronRight className="w-3 h-3" /> {note}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setSelectedCandidate(null)}>Close</Button>
                                <Button className="gap-2">
                                    <MessageSquare className="w-4 h-4" /> Schedule Interview
                                </Button>
                            </DialogFooter>
                        </>
                    )}
                </DialogContent>
            </Dialog>

            {/* Add Candidate Dialog */}
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Candidate</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleAddSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input name="firstName" placeholder="First Name" required />
                            <Input name="lastName" placeholder="Last Name" required />
                        </div>
                        <Input name="email" type="email" placeholder="Email" required />
                        <Input name="phone" placeholder="Phone" />
                        <Input name="position" placeholder="Position" required />
                        <Input name="department" placeholder="Department (e.g. development)" required />
                        <Input name="source" placeholder="Source (e.g. LinkedIn)" />
                        <Input name="skills" placeholder="Skills (comma-separated)" />
                        <DialogFooter>
                            <Button type="button" variant="ghost" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                            <Button type="submit">Add Candidate</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
