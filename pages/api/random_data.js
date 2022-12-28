import jsonData from "./files/chat.json";
export default function handler(req,res) {
    const randomComment = jsonData[Math.floor(Math.random() * jsonData.length)];
    res.status(200).json({ comment: randomComment.message });

}