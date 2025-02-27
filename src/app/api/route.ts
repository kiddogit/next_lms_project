

import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";

export async function POST(){ 
  dbConnect()
  await User.create({
    email : "alka.rajbanshi.11@gmail.com",
    username : "Alka123",
    googleid : "123456789",
    profileImage : "ThisIsImage"
  })
  
  return Response.json({
    message : "you hit api route"
  },{status : 200})
}