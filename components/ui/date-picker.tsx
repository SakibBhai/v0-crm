"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
    date?: Date
    onDateChange?: (date: Date | undefined) => void
    placeholder?: string
    className?: string
    name?: string
    required?: boolean
    disabled?: boolean
}

export function DatePicker({
    date,
    onDateChange,
    placeholder = "Pick a date",
    className,
    name,
    required,
    disabled,
}: DatePickerProps) {
    const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(date)
    const [open, setOpen] = React.useState(false)

    const handleSelect = (newDate: Date | undefined) => {
        setSelectedDate(newDate)
        onDateChange?.(newDate)
        setOpen(false)
    }

    return (
        <>
            {name && (
                <input
                    type="hidden"
                    name={name}
                    value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
                    required={required}
                />
            )}
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        disabled={disabled}
                        className={cn(
                            "w-full justify-start text-left font-normal bg-secondary/50 border-border hover:bg-secondary",
                            !selectedDate && "text-muted-foreground",
                            className
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : <span>{placeholder}</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleSelect}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </>
    )
}
