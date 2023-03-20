import prisma from "../../lib/prisma.js";

export default async function handler(req, res) {
  const data = await prisma.language.findMany();
  res.send(JSON.stringify(data));
}
