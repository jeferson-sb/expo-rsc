import { Client } from "pg";
const client = new Client({
  host: process.env.DATABASE_HOST || "localhost",
  port: 5432,
  user: process.env.DATABASE_USER || "postgres",
  database: process.env.DATABASE_DEFAULT || "postgres",
  password: process.env.DATABASE_PASS || "postgres",
});
client.connect();

export { client };
