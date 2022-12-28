import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }
  const languageData = JSON.parse(req.body);
  const savedData = await prisma.language.create({
    data: languageData,
  });
  res.json(savedData);
}
