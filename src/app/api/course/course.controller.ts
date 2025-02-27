import dbConnect from "@/database/connection";

export async function createCourse(req:Request){
  try{
    await dbConnect()
    const {title, description, price, duration, category} = await req.json()

  } catch (error) {

  }
}