import fs from "fs/promises"

let a = await fs.readFile("deepu.txt")
let b = await fs.writeFile("deepu.txt","\n\n\n\n this is amazing")

console.log(a.toString(),b) 