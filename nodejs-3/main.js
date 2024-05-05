const fs = require("fs")
const { connected } = require("process")
console.log(fs)

// to write a file withour stoping the execution of the code

fs.writeFile("deepu.txt","Dipak is a good developer", ()=>{
    console.log("done")
})

//To add something to a file we use append.File

fs.appendFile("deepu.txt", "I got a 2 crore package.", (e,d)=>{
    console.log(d);
})
console.log("ending");


