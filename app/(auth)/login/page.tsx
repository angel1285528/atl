import { signIn, auth, providerMap } from "@/auth"
import { SignIn } from "../(utils)/componets/signInForm" 
export default async function SignInPage() {
  return (
    <div className="flex flex-col gap-2">
      
      <SignIn />
      {Object.values(providerMap).map((provider) => (
        
        <form
          action={async () => {
            "use server"
            await signIn(provider.id)
          }}>
          
          <button type="submit">
            <span>Acceder con {provider.name}</span>
          </button>
        </form>
      ))}
    </div>
  )
}