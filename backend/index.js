import { config } from "dotenv";
config({ path: "./config/.env" });
import { dbConnected } from "./config/connectedDB.js";

import express from "express";

const app = express();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  dbConnected();
});
