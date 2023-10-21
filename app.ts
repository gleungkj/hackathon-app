
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { generateResponse } from "./controllers/index";

dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

app.get("/", )

app.post("/generate", generateResponse);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`);
});