import path from "path"

let mypath = " D:\\nodejs-3\\deepu.txt"
// seing the extension name
console.log(path.extname(mypath))

// seing the directory name
console.log(path.dirname(mypath))

// to know the file name we use basename
console.log(path.basename(mypath))

// to join the directory we use
console.log(path.join("D:/", "SD\\deepu.txt"))


