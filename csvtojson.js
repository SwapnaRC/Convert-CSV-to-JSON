// using a node 
const fs = require("fs")

csv = fs.readFileSync("emp.csv")

var arr = csv.toString().split("\r");

let result = [];

let headers = arr[0].split(", ")
console.log(headers)
for (let i=1; i<arr.length -1;i++){
let obj = {}
let str = arr[i]
let s = ''
let flag = 0
for (let ch of str){
    if(ch === '"' && flag === 0){
        flag = 1
    }
    else  if(ch === '"' && flag == 1) flag = 0 
    if(ch === ', ' && flag === 0) ch='|'
    if(ch !== '"')s +=ch
}

let properties = s.split("|")
for (let j in headers){
    if(properties[j].includes(", ")){
        obj[headers[j]] = properties[j].
        split(", ").map(item => item.trim())
    }
    else  obj[headers[j]] = properties[j]
}
console.log(obj, "opbj")
result.push(obj)
}

let json = JSON.stringify(result);

  
fs.writeFileSync('result.json', json);