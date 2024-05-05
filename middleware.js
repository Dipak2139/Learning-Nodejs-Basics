//middleware
const express = require('express')
const fs = require('fs')
const blog = require('./routes/blog')
const app = express()
const port = 3000

//built in middleware
// app.use(express.static("public"))

app.use('/blog', blog)

//Middleware1
app.use((req,res,next)=>{
    // example i can write also
    fs.appendFileSync('deepu.txt', `${Date.now()} is a ${req.method}\n`)
    // example for user logging
    console.log(`${Date.now()} is a ${req.method}`)
    console.log('m1')
    // if we send response from this middleware than other middleware or routes will not execute
    // res.send('hacked by middleware1')
    next()
})

//Middleware2
app.use((req,res,next)=>{
    console.log(req.headers)
    req.dipak = "I will become most succesfull software developer"
    console.log('m2')
    next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('this is an about section...hello lande')
})

  app.get('/contact', (req, res) => {
    res.send('teri aukaad hain mujhe contact karni ki?' + req.dipak)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
