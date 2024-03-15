import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Deck from "./models/Deck";

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// connect to mongoose
mongoose
  .connect(
    "mongodb+srv://flashcarduser:rRKAayJzsuAmNpka@cluster0.sljuu7s.mongodb.net/"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  });
