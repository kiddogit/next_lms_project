import mongoose from "mongoose";

const MONGODB_CS = process.env.MONGODB_CS  // variable

if(!MONGODB_CS){
  throw new Error("You must provide Mongodb Connection String")
}

const dbConnect  = async () => {
  if(mongoose.connection.readyState === 1){
    console.log("Dtatabase already connected!!")
    // console.log(mongoose.models.Category, "MMC")

    return;
  }
  // console.log(mongoose.connection.readyState)

  
  try {
    await mongoose.connect(MONGODB_CS)
    console.log("Database connected succefully 😄")
  } catch (error) {
    console.log("Error connecting..  😭", error)
  }
}

export default dbConnect

