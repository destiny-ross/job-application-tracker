import express, { Request, Response } from "express";
const app = express();

app.get("/test", (req: Request, res: Response): Response => {
  return res.status(200).json({ message: "Hello World!" });
});

export default app;
