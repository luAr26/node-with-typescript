import express from "express";
import { addTodo } from "../data.js";

const router = express.Router();

// function handlePostTodos(req: Request, res: Response) {}

router.post("/todos", (req, res) => {
  console.log("Request body", req.body);
  const text = req.body.text;
  if (!text) {
    res.status(400).json({ error: "Text field is required..." });
  }
  const addedTodo = addTodo(text);
  res.json({ message: "Todo added", todo: addedTodo });
});

export default router;
