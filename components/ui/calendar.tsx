"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
    className,
    classNames,
    showOutsideDays = true,
    ...props
}: CalendarProps) {
    return (
        <DayPicker
            showOutsideDays={showOutsideDays}
            className={cn("p-4", className)}
            classNames={{
                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                month: "space-y-4",
                month_caption: "flex justify-center pt-1 relative items-center mb-2",
                caption_label: "text-sm font-semibold text-foreground tracking-wide",
                nav: "space-x-1 flex items-center",
                button_previous: cn(
                    buttonVariants({ variant: "outline" }),
                    "h-8 w-8 bg-secondary/50 p-0 opacity-70 hover:opacity-100 hover:bg-primary/20 hover:text-primary hover:border-primary/50 absolute left-1 transition-all duration-200 rounded-lg"
                ),
                button_next: cn(
                    buttonVariants({ variant: "outline" }),
                    "h-8 w-8 bg-secondary/50 p-0 opacity-70 hover:opacity-100 hover:bg-primary/20 hover:text-primary hover:border-primary/50 absolute right-1 transition-all duration-200 rounded-lg"
                ),
                month_grid: "w-full border-collapse space-y-1",
                weekdays: "flex mb-2",
                weekday:
                    "text-muted-foreground rounded-md w-10 font-medium text-[0.75rem] uppercase tracking-wider",
                week: "flex w-full mt-1",
                day: cn(
                    "relative h-10 w-10 text-center text-sm p-0 transition-all duration-200",
                    "[&:has([aria-selected].day-range-end)]:rounded-r-lg",
                    "[&:has([aria-selected].day-outside)]:bg-accent/50",
                    "[&:has([aria-selected])]:bg-primary/10",
                    "first:[&:has([aria-selected])]:rounded-l-lg",
                    "last:[&:has([aria-selected])]:rounded-r-lg",
                    "focus-within:relative focus-within:z-20"
                ),
                day_button: cn(
                    buttonVariants({ variant: "ghost" }),
                    "h-10 w-10 p-0 font-normal rounded-lg transition-all duration-200",
                    "hover:bg-primary/20 hover:text-primary hover:scale-110",
                    "aria-selected:opacity-100"
                ),
                range_end: "day-range-end",
                selected: cn(
                    "bg-primary text-primary-foreground",
                    "hover:bg-primary/90",
                    "focus:bg-primary",
                    "shadow-md shadow-primary/20 rounded-lg font-medium"
                ),
                today: cn(
                    "bg-accent text-accent-foreground font-bold rounded-lg",
                    "ring-2 ring-primary/30 ring-offset-1 ring-offset-background"
                ),
                outside:
                    "day-outside text-muted-foreground/50 opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground",
                disabled: "text-muted-foreground opacity-30 cursor-not-allowed",
                range_middle:
                    "aria-selected:bg-primary/10 aria-selected:text-foreground rounded-none",
                hidden: "invisible",
                ...classNames,
            }}
            components={{
                Chevron: ({ orientation }) => {
                    const Icon = orientation === "left" ? ChevronLeft : ChevronRight
                    return <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                },
            }}
            {...props}
        />
    )
}
Calendar.displayName = "Calendar"

export { Calendar }

