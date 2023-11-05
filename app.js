const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())


const {v4:uuidv4} = require("uuid")

const bodyparser = require('body-parser')
const { type } = require("@testing-library/user-event/dist/type")
app.use(express.static("./src/components"))
app.use(bodyparser.urlencoded({extended:true}))

app.get("/",cors(),(req,res)=>{
    
})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/signup",async(req,res)=>{
    const{name,email,password}=req.body

    const data={
        email:email,
        name:name,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.listen(8000,()=>{
    console.log("port connected");
})
