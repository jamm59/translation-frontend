import fs from "fs";
export default function handler(req,res) {
    fs.readFile("output.json", "utf-8", function readFileCallback(err,jsondata){
        err ? console.log(err) : ""; 
        res.send(JSON.stringify(jsondata));
    });
}