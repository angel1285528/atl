"use server"
import { signIn } from "@/auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("credentials", { redirectTo: "/modulos"})
      }}
    >
      <button type="submit">Sign in</button>
    </form>
  )
}