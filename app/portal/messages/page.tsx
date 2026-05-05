"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { AnimatedCard } from "@/components/animated-card"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Send } from "lucide-react"
import { useState } from "react"

const initialMessages = [
  { id: 1, from: "Agency", content: "Hi! Your website redesign project is progressing well. We've completed the design phase.", time: "2 hours ago", isAgency: true },
  { id: 2, from: "You", content: "That's great! Can I see the latest mockups?", time: "1 hour ago", isAgency: false },
  { id: 3, from: "Agency", content: "Sure! I've uploaded the latest designs to the project files. You can review them at your convenience.", time: "45 min ago", isAgency: true },
]

export default function PortalMessagesPage() {
  const [messages, setMessages] = useState(initialMessages)
  const [newMsg, setNewMsg] = useState("")

  const handleSend = () => {
    if (!newMsg.trim()) return
    setMessages(prev => [...prev, { id: prev.length + 1, from: "You", content: newMsg, time: "Just now", isAgency: false }])
    setNewMsg("")
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="animate-in fade-in slide-in-from-top-4 duration-500">
          <h1 className="text-2xl font-bold flex items-center gap-2"><MessageSquare className="w-6 h-6 text-blue-400" />Messages</h1>
          <p className="text-muted-foreground mt-1">Communicate with our team</p>
        </div>
        <AnimatedCard delay={100} className="h-[calc(100vh-260px)] flex flex-col">
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.isAgency ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[70%] p-3 rounded-2xl ${msg.isAgency ? "bg-secondary rounded-tl-sm" : "bg-primary text-primary-foreground rounded-tr-sm"}`}>
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-[10px] mt-1 ${msg.isAgency ? "text-muted-foreground" : "text-primary-foreground/70"}`}>{msg.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input value={newMsg} onChange={e => setNewMsg(e.target.value)} placeholder="Type a message..." className="bg-secondary border-0" onKeyDown={e => e.key === "Enter" && handleSend()} />
              <Button onClick={handleSend} size="sm" className="px-4"><Send className="w-4 h-4" /></Button>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </DashboardLayout>
  )
}
