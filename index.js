//Program to arrange all the jgp,png,pdf,etc to there respective folder for example all jpg files will be stored into jpg folder
import fs from "fs/promises"
// console.log(fs)

import fsn from "fs"
import path from "path"

const basepath = "C:\\Users\\dipak\\Desktop\\Nodejs"
let files = await fs.readdir(basepath)
// console.log(files)


for (const item of files){
    console.log("running for ",item)
    let ext = item.split(".")[item.split(".").length - 1]
    // console.log(ext)
    if(ext!="js" && ext!="json" && item.split(".").length >1 ){
        if(fsn.existsSync(path.join(basepath,ext))){
           let  r= fs.rename(path.join(basepath,item), path.join(basepath,ext,item))
        //    console.log(r)
        // Explaination of the above code from chatgpt
// fsn.existsSync(path.join(basepath,ext)): This checks if a file exists at the combined path of basepath and ext. fsn.existsSync() is a function that checks if a file exists synchronously (meaning it doesn't wait for an asynchronous operation to complete). path.join() is used to combine basepath and ext into a single path.
// If the file does exist at that path, the code proceeds to the next line:
// fs.rename(path.join(basepath,item), path.join(basepath,ext,item)): This line renames the file. It uses fs.rename() function to rename the file located at path.join(basepath,item) to the new name specified by path.join(basepath,ext,item). So, essentially, it's moving the file from its original location (basepath) to a new location with the same filename but under a different directory (ext).
// For instance, let's say basepath is "/home/user/documents/" and ext is "images", and item is "example.txt". If the file "/home/user/documents/example.txt" exists, this code will rename it to "/home/user/documents/images/example.txt".

 
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath,item), path.join(basepath,ext,item))
        }
    }
  
}

