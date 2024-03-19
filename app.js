

const express = require("express");
const app = express();
const connectDB = require('./db/connect')
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const products_routes = require("./routes/products")

app.get("/" ,(req, res)=>{
    res.send("Hi , I am live")
});

app.use("/api/products",products_routes);

const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,() =>{
            console.log(`${PORT} yes I am connected`)
        }) 
    }catch(error){
        console.log(error)
    }
};
start();
//AynZyLgxcYvdIPit
//shreethombre2


