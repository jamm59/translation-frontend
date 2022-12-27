import jsonData from "/public/files/chat.json";
export default async function handler(req,res) {
    const randomComment = jsonData[Math.floor(Math.random() * jsonData.length)];
    res.status(200).json({ comment: randomComment.message });
}