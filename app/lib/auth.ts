import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import prisma from './prisma'
import { admin } from 'better-auth/plugins/admin'
import { organization } from 'better-auth/plugins/organization'

//import { sendEmail } from './send-email'
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
}),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [
        admin(),
        organization(),
    ]
  /*  emailVerification: {
        sendVerificationEmail: async ({ user, url, token}, request) => {
            await sendEmail({
                to: user.email,
                subject: 'Verify your email',
                text: `Click this link to verify your email: ${url}`,
            })
        }},
        */
})