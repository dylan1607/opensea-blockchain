// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { client } from "~/lib/mongoClient";

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
  try {
    await client.connect();
    const response = await client.db("blockchain").command({ ping: 1 });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
