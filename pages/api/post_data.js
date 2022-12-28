import fs from "fs";

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
    fs.readFile("output.json", "utf-8", function readFileCallback(err,data){
      err ? console.log(err) : ""; 
      
      const obj = JSON.parse(data);
      obj.table.push(frontEndData);
      const json = JSON.stringify(obj);
      fs.writeFile("output.json", json, "utf-8",callback);


    })
 
  }