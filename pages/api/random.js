import fs from 'fs';
import csv from 'csv-parser';

export default async function handler(req,res) {
    const comments = [];

    fs.createReadStream("../next-data/files/chat_dataset.csv")
      .pipe(csv())
      .on('data', (data) => {comments.push(data.message)})
      .on('end', () => {
        const randomComment = comments[Math.floor(Math.random() * comments.length)];
        res.json({ comment: randomComment });
      });
}