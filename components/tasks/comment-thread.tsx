"use client"

import { useState } from "react"
import type { Comment } from "@/lib/types/task"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Reply, Smile, Paperclip, MoreVertical, Edit2, Trash2 } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface CommentThreadProps {
    comments: Comment[]
    currentUserId: string
    onAddComment: (text: string, parentId?: string) => void
    onDeleteComment: (id: string) => void
    onAddReaction: (commentId: string, emoji: string) => void
}

const REACTION_EMOJIS = ["👍", "❤️", "🎉", "👀", "🚀", "💯"]

export function CommentThread({
    comments,
    currentUserId,
    onAddComment,
    onDeleteComment,
    onAddReaction,
}: CommentThreadProps) {
    const [newComment, setNewComment] = useState("")
    const [replyingTo, setReplyingTo] = useState<string | null>(null)
    const [replyText, setReplyText] = useState("")
    const [showEmojiPicker, setShowEmojiPicker] = useState<string | null>(null)

    // Organize comments into threads
    const rootComments = comments.filter((c) => !c.parentId)
    const getReplies = (parentId: string) => comments.filter((c) => c.parentId === parentId)

    const handleSubmit = (parentId?: string) => {
        const text = parentId ? replyText : newComment
        if (!text.trim()) return

        onAddComment(text.trim(), parentId)

        if (parentId) {
            setReplyText("")
            setReplyingTo(null)
        } else {
            setNewComment("")
        }
    }

    const handleMention = (text: string, setText: (val: string) => void) => {
        setText(text + "@")
        // In a real app, this would show a user picker
    }

    const formatTimeAgo = (dateString: string) => {
        const date = new Date(dateString)
        const now = new Date()
        const diffMs = now.getTime() - date.getTime()
        const diffMins = Math.floor(diffMs / 60000)
        const diffHours = Math.floor(diffMins / 60)
        const diffDays = Math.floor(diffHours / 24)

        if (diffMins < 1) return "just now"
        if (diffMins < 60) return `${diffMins}m ago`
        if (diffHours < 24) return `${diffHours}h ago`
        if (diffDays < 7) return `${diffDays}d ago`
        return date.toLocaleDateString()
    }

    const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => {
        const isOwn = comment.authorId === currentUserId
        const replies = getReplies(comment.id)

        return (
            <div className={cn("group", isReply && "ml-8 mt-2")}>
                <div className="flex gap-3">
                    <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarFallback className="bg-primary/20 text-primary text-xs">
                            {comment.authorInitials}
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                        {/* Header */}
                        <div className="flex items-center gap-2">
                            <span className="font-medium text-sm">{comment.authorName}</span>
                            <span className="text-xs text-muted-foreground">{formatTimeAgo(comment.createdAt)}</span>
                        </div>

                        {/* Content */}
                        <div className="mt-1 text-sm text-foreground whitespace-pre-wrap">
                            {comment.text.split(/(@\w+)/g).map((part, i) =>
                                part.startsWith("@") ? (
                                    <span key={i} className="text-primary font-medium">
                                        {part}
                                    </span>
                                ) : (
                                    <span key={i}>{part}</span>
                                )
                            )}
                        </div>

                        {/* Reactions */}
                        {comment.reactions && comment.reactions.length > 0 && (
                            <div className="flex gap-1 mt-2">
                                {comment.reactions.map((reaction) => (
                                    <button
                                        key={reaction.emoji}
                                        onClick={() => onAddReaction(comment.id, reaction.emoji)}
                                        className={cn(
                                            "flex items-center gap-1 px-2 py-0.5 rounded-full text-xs border transition-colors",
                                            reaction.userIds.includes(currentUserId)
                                                ? "bg-primary/20 border-primary/30"
                                                : "bg-secondary border-border hover:border-primary/30"
                                        )}
                                    >
                                        <span>{reaction.emoji}</span>
                                        <span>{reaction.userIds.length}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => setReplyingTo(comment.id)}
                                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                            >
                                <Reply className="w-3 h-3" />
                                Reply
                            </button>

                            <div className="relative">
                                <button
                                    onClick={() => setShowEmojiPicker(showEmojiPicker === comment.id ? null : comment.id)}
                                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                                >
                                    <Smile className="w-3 h-3" />
                                    React
                                </button>
                                {showEmojiPicker === comment.id && (
                                    <div className="absolute bottom-full left-0 mb-1 flex gap-1 p-1 bg-card border border-border rounded-lg shadow-lg z-10">
                                        {REACTION_EMOJIS.map((emoji) => (
                                            <button
                                                key={emoji}
                                                onClick={() => {
                                                    onAddReaction(comment.id, emoji)
                                                    setShowEmojiPicker(null)
                                                }}
                                                className="p-1 hover:bg-secondary rounded"
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {isOwn && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="p-1 hover:bg-secondary rounded">
                                        <MoreVertical className="w-3 h-3 text-muted-foreground" />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem>
                                            <Edit2 className="w-3 h-3 mr-2" /> Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => onDeleteComment(comment.id)}
                                            className="text-destructive"
                                        >
                                            <Trash2 className="w-3 h-3 mr-2" /> Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                        </div>

                        {/* Reply Input */}
                        {replyingTo === comment.id && (
                            <div className="mt-2 flex gap-2">
                                <Textarea
                                    autoFocus
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    placeholder={`Reply to ${comment.authorName}...`}
                                    className="flex-1 min-h-[60px] text-sm"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault()
                                            handleSubmit(comment.id)
                                        }
                                        if (e.key === "Escape") {
                                            setReplyingTo(null)
                                            setReplyText("")
                                        }
                                    }}
                                />
                                <div className="flex flex-col gap-1">
                                    <Button size="sm" onClick={() => handleSubmit(comment.id)}>
                                        Reply
                                    </Button>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={() => {
                                            setReplyingTo(null)
                                            setReplyText("")
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Nested Replies */}
                {replies.map((reply) => (
                    <CommentItem key={reply.id} comment={reply} isReply />
                ))}
            </div>
        )
    }

    return (
        <div className="space-y-4">
            {/* Comments List */}
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {rootComments.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-4">No comments yet. Start the conversation!</p>
                ) : (
                    rootComments.map((comment) => <CommentItem key={comment.id} comment={comment} />)
                )}
            </div>

            {/* New Comment Input */}
            <div className="pt-3 border-t border-border">
                <div className="flex gap-3">
                    <Avatar className="w-8 h-8 flex-shrink-0">
                        <AvatarFallback className="bg-primary/20 text-primary text-xs">ME</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                        <Textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Write a comment... Use @mention to notify someone"
                            className="min-h-[80px] text-sm"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault()
                                    handleSubmit()
                                }
                            }}
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => handleMention(newComment, setNewComment)}
                                    className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground"
                                    title="Mention someone"
                                >
                                    @
                                </button>
                                <button
                                    className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground"
                                    title="Attach file"
                                >
                                    <Paperclip className="w-4 h-4" />
                                </button>
                            </div>
                            <Button size="sm" onClick={() => handleSubmit()} disabled={!newComment.trim()}>
                                Comment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
