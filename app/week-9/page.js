"use client";
import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Layout from "./layout";
 

export default function Home() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
   
  // Display some of the user's information
  return (user===null?
    <>
      <h1 className="text-xl">Shopping List</h1>
      <button className="text-lg hover:underline" type="button" onClick={()=>gitHubSignIn()}>Sign in with GitHub</button>
    </>
    :
    <Layout>
      <h1 className="text-xl">Shopping List</h1>
      <p>Signed in as {user?.displayName}({user?.email})</p>
      <p><button className="text-lg hover:underline" type="button" onClick={()=>firebaseSignOut()}>Sign out</button></p>
      <p><Link href="/week-9/shopping-list">Continue to your Shopping List</Link></p>
    </Layout>);
}
