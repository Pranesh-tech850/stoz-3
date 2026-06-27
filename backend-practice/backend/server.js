import express from "express";
import dotenv from "dotenv";
import User from "./models/User.js"
import connectDB from "./config/db.js";


dotenv.config();
connectDB();
const app = express();




app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        msg: "Hello"
    });
});

const PORT = process.env.PORT || 5000;

console.log(process.env.PORT);
console.log(process.env.MONGO_URI);
app.post("/register", async (req, res) => {
    try {
       
   
        const{name,email,password} = req.body;
        console.log(req.body);

        const userExists = await User.findOne({email});

        if(userExists)
        {
            return res.status(400).json({messge:`User already exists`});
        }
        
        const user = await User.create({
            name,email,password
        });
        if(user){
            res.status(201).json({
                user,
                success:true
            })
        }
        else
        {
            res.status(400).json({message:`Invalid User Data`})
        }
       
       
    } catch (error) {
    

        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


console.log("File reached successfully");