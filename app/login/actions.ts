"use server"

import { signIn } from "@/lib/auth"
import { AuthError } from "next-auth"

export async function loginAction(formData: { email: string; password: string; callbackUrl: string }) {
  try {
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirectTo: formData.callbackUrl || "/",
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid email or password. Please try again."
        default:
          return "Something went wrong. Please try again."
      }
    }
    // NextAuth v5 signIn throws a NEXT_REDIRECT on success - we must re-throw it
    throw error
  }
}
