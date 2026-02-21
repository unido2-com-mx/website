import { MongoClient } from "mongodb";
import { attachDatabasePool } from "@vercel/functions";

const uri = process.env.MONGODB_URI;

let client: MongoClient | undefined;
let clientPromise: Promise<MongoClient> | undefined;

function createMongoClient(connectionString: string) {
  const mongoClient = new MongoClient(connectionString);
  attachDatabasePool(mongoClient);

  return mongoClient;
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export async function getMongoClient() {
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = createMongoClient(uri);
      global._mongoClientPromise = client.connect();
    }

    return global._mongoClientPromise;
  }

  if (!clientPromise) {
    client = createMongoClient(uri);
    clientPromise = client.connect();
  }

  return clientPromise;
}

export function getMongoDatabaseName() {
  return process.env.MONGODB_DB ?? "mentorsalud";
}
