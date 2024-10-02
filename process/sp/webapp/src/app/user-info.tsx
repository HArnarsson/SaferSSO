"use client"

import { useSession } from "next-auth/react";

export default function UserInfo() {
    const session = useSession()
  
    if (session.status !== "authenticated") return <p>youre unauthenticated pal</p>
  
    return <pre>{JSON.stringify(session, null, 2)}</pre>
}