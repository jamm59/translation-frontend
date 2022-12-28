import jsonData1 from "output.json";
export default function handler(req,res) {
    res.send(JSON.stringify(jsonData1));
}