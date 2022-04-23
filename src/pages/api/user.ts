import { NextApiRequest, NextApiResponse } from "next";
import { handleException } from "~/lib/http";
import { client } from "~/lib/mongoClient";

interface data {
  message: string,
  responseCode: number,
}

const handler = async (req:NextApiRequest, res:NextApiResponse<data>) => {
  const { username, walletAddress } = req.body;
  const timestamp = Date.now();
  const doc = {
    $set: {
      "_id": walletAddress,
      username,
      walletAddress,
      updatedAt: new Date(timestamp).toISOString(),
      timestamp
    }
  };
  try {
    await client.connect();
    const database = client.db("blockchain");
    const collection = database.collection("users");
    // this option to create a document if not exists
    const options = { upsert: true };
    const filter = { _id: walletAddress };

    await collection.updateOne(filter, doc, options);
    res.status(200).send({
      message: "Wallet connected",
      responseCode: 200,
    });
  } catch (error) {
    console.log(error);
    handleException(res, error);
  } finally {
    await client.close();
  }
};

export default handler;