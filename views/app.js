const express = require('express')
const path = require ('path')
const app = express()
const publicpath = path.resolve(__dirname,'..','public')
app.use(express.static(publicpath))
app.listen(7000,() => {
    console.log('server running in port 7000');
})
app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, 'home.html'))
})