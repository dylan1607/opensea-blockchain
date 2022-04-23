import { MongoClient, ServerApiVersion } from "mongodb";

export const client = new MongoClient (
  process.env.NEXT_PUBLIC_MONGODB_CONNECTION_STRING,
  {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1
  }
);