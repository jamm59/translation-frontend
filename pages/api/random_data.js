import fs from 'fs';
import csv from 'csv-parser';

export default async function handler(req,res) {
    const comments = [];

    try {
      fs.createReadStream("pages/api/files/chat_dataset.csv")
        .pipe(csv())
        .on('data', (data) => {comments.push(data.message)})
        .on('end', () => {
          const randomComment = comments[Math.floor(Math.random() * comments.length)];
          res.status(200).json({ comment: randomComment });
        });
      } catch (error) {
        console.log(error);
        res.status(200).json({ comment: "something is wrong!" });
      }
}