const express = require('express');
const app = express()

app.get('/getData',(req,res)=>{
    res.json({
        "stataus":200,
        "statusmessage":"succcess"
    })
    
})

app.listen(3000,(req,res)=>{
    console.log("api running")
})