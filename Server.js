const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const router = require('./routes/Route')
const app=express()

app.use(express.json())
app.use(cors())


mongoose
.connect("mongodb+srv://Tarun-Raaj:102403tarun@cluster0.n7ivxa4.mongodb.net/Product?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected successfully to MongoDB"))
.catch((err)=>console.log(err))

app.use(router)

app.listen("8000",()=>console.log(`Listening on 8000`))