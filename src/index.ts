import express from "express";
import cors from "cors";
import peopleRoutes from "./routes/people.routes";

const app = express();

app
  .use(cors())
  .use(express.json())
  .use(peopleRoutes);

app.listen(5000, () => console.log("🚀 Running at 5000"));
