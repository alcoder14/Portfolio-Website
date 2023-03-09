import express from "express"
import nodemailer from "nodemailer"
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(bodyParser.json())
app.use(cors())

app.post("/send-email", (req, res)=>{
    const { email, message, fname, lname, subject } = req.body

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }  
    })

    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: subject,
        text: message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
        } else {
            console.log("Email sent: " + info.response)
        }
    })
    
    res.send("Email Sent Succesfully")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> console.log("Server started on port 3000"))