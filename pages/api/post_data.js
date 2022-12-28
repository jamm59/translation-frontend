import fs from "fs";
import jsonData from "temp/output.json";

export default function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const callback = err => {
      if (err) {
        console.error(err)
        return
      }
      console.log("File written successfully..");
    };
    
    const frontEndData = JSON.parse(req.body);
    const obj = jsonData;
    obj.table.push(frontEndData);
    const json = JSON.stringify(obj);
    fs.writeFile("temp/output.json", json, "utf-8",callback);
 
  }