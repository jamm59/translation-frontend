import fs from "fs";

export default function handler(req, res) {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
  
    // not needed in NextJS v12+
    const body = JSON.parse(req.body)
    const { inEnglish,inPidgin } = body;
    const content = `${inEnglish} ,,,${inPidgin}\n`;
    const fileName = 'files/output.txt';
    fs.appendFile(fileName, content, err => {
      if (err) {
        console.error(err)
        return
      }
      console.log("file written successfully");
    });
  }