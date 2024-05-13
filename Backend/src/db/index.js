import mongoose from "mongoose";
import { DB_Name } from "../constants.js";



const connectDB = async ()=>{
    try {

     const connectionInst=   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)

     console.log(`\n Mongodb conneted  DB Host : ${connectionInst.Connection.length}`)
        
    } catch (error) {
        console.log("Mongodb error" ,error)
        process.exit(1)
        
    }
}

export default connectDB;