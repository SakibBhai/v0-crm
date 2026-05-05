import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login - AgencyFlow CRM",
  description: "Sign in to your AgencyFlow CRM account",
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
