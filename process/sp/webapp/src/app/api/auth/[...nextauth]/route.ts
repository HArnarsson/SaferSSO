import NextAuth from "next-auth";

const handler = NextAuth({
    session: {
      strategy: "jwt",
    },
    providers: [
      {
        id: "idp",
        name: "Identity Provider",
        type: "oauth",
        // We should change this to an env variable sometime?
        wellKnown: "http://127.0.0.1:8001/auth/.well-known/openid-configuration/",
        authorization: { params: { scope: "openid profile email" } },
        clientId: process.env.WEBAPP_CLIENT_ID,
        clientSecret: process.env.WEBAPP_CLIENT_SECRET,
        checks: ["pkce", "state"],
        async profile(profile) {
          return {
            id: profile.sub,
          }
        },
      },
    ],
    secret: process.env.NEXTAUTH_SECRET,

    debug: true,
  })
  
  export { handler as GET, handler as POST }

