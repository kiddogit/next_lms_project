"use client"

import {signIn, signOut, useSession} from "next-auth/react"

function Home(){
  // const {data:session} = useSession() // useSelector() ==> select * from users
  // if(session){
  //   return(
  //    <>
  //     <h1>Welcome, {session.user?.name}</h1>
  //     <h1>{session.user?.email}</h1>
  //     <button onClick={()=>signOut()}>Sign Out</button>
  //     </>
  //   )
  // }
  return(
    <div>
      <h1>Not Logged In</h1>
      <button onClick={()=>signIn("google")}>Sign in With Google</button>
    </div>
  )
}


export default Home