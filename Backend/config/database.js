
import mongoose from "mongoose";
mongoose.set('strictQuery', false);//to remove deprication warning
export const databaseConnect=()=>{

    mongoose.connect(process.env.DB_PORT).then((c)=>{
        console.log(`Database connected to ${c.connection.host}`);
        
    }).catch((e)=>{
        console.log(e);
        
    })
}