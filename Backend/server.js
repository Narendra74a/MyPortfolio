import {app} from "./app.js";
import {databaseConnect} from "./config/database.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";

dotenv.config({path:"./Backend/config/config.env"});
databaseConnect()


cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running ${process.env.PORT}`);
    
})