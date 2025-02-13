const express=require("express");
const app=express();
const cors = require('cors');
app.use(cors());

//middleware to parse json data
app.use(express.json())

const port=process.env.PORT || 4001;

//connect with db
const db=require("./config/database");
db.connect();

//import Routes from "./routes/";
const bookRoutes=require("./routes/bookRoutes");
const userRoutes=require("./routes/userRoutes");
app.use("/book",bookRoutes);
app.use("/user",userRoutes);

//server starts

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

//default route
app.get("/",(req,res)=>{
    res.send("welcome to book store");
    })