import { Db, MongoClient } from "mongodb";

let db: Db;
let client: MongoClient

const connect = async () => {
  client = await MongoClient.connect('mongodb://localhost');
  db = client.db('shortener')
};

const disconnection = async () => {
  await client.close();
};

const mongoDb = {
  connect,
  disconnection,
  getDb: () => db
};

export default mongoDb