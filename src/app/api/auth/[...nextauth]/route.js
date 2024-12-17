import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

import API from "@/axiosConfig/config";


const handler = NextAuth({
    useSecureCookies: process.env.NODE_ENV == 'production',
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/signin',

    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials
                const creds = {
                    email,
                    password
                }
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(creds)
                })
                const result = await res.json()
                console.log('results -->', result)

                if (res.ok === false) {
                    throw new Error(result.errors[0].detail || 'Unable to log in with provided credentials.');
                } else {
                    const user = {
                        access_token: result.access,
                        refresh_token: result.refresh,
                        ...result.user
                    }
                    return Promise.resolve(user)
                }
            }

        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    scope: "openid email profile",
                    prompt: "consent select_account",


                },
            },
        }),

        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        })
    ],
    callbacks: {

        async signIn({ account, profile }) {
            // allow sign in only if access_token from backend is received
            return true

        },
        async jwt({ token, user, account, trigger, session, profile }) {
            if (user) token.user = user // for credentials provider
            if (account && token) { // for oauth
                if (account.provider === 'google') {
                    const accessToken = account?.access_token
                    const idToken = account?.id_token
                    try {
                        const { data } = await API.post(`/api/v1/auth/google/`, {
                            'access_token': accessToken,
                            'id_token': idToken
                        })
                        token.user = {
                            ...data?.user,
                            access_token: data?.access,
                            refresh_token: data?.refresh,
                            is_new_user: data?.is_new_user,
                            phone_number: data?.phone_number,
                            picture: token?.picture

                        }


                    } catch (e) {
                        throw new Error(`Something went wrong, please try again later. ${e.message}`)
                    }

                }
                if (account.provider === 'facebook') {


                    try {

                        const facebookAccessToken = account?.access_token
                        const { data } = await API.post(`/api/v1/auth/facebook/`, {
                            'access_token': facebookAccessToken
                        })
                        token.user = {
                            ...data?.user,
                            access_token: data?.access,
                            refresh_token: data?.refresh,
                            is_new_user: data?.is_new_user,
                            phone_number: data?.phone_number,
                            picture: token?.picture

                        }
                    } catch (e) {
                        throw new Error(`Something went wrong, please try again later. ${e.message}`)
                    }
                }
            }

            // phone_number update 
            if (trigger === 'update' && session) {
                token.user.phone_number = session?.user?.phone_number
                token.user.is_new_user = session?.user?.is_new_user
            }

            return token

        },
        async session({ session, token, trigger }) {
            session.user = token?.user

            return session
        }

    },
    debug: process.env.NODE_ENV !== 'production',

})

export { handler as GET, handler as POST }

