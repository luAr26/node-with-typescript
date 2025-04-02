import express from "express";
import { addTodo, getTodo, getTodos, removeTodo, updateTodo } from "../data.ts";

const router = express.Router();

// function handlePostTodos(req: Request, res: Response) {}
enum TODO_TYPE {
  BASIC,
  URGENT,
}

router.get("/todos", (req, res) => {
  const todos = getTodos();
  res.json({ todos });
});

router.get("/todos/:id", (req, res) => {
  const todo = getTodo(+req.params.id);
  res.json({ todo });
});

router.post("/todos", (req, res) => {
  const text = req.body.text;
  if (!text) {
    res.status(400).json({ error: "Text field is required..." });
  }
  const addedTodo = addTodo(text);
  res.json({ message: "Todo added.", todo: addedTodo });
});

router.patch("/todos/:id", (req, res) => {
  const updatedTodo = updateTodo(+req.params.id, req.body.text);
  res.json({ message: "Todo updated.", todo: updatedTodo });
});

router.delete("/todos/:id", (req, res) => {
  removeTodo(+req.params.id);
  res.json({ message: "Todo deleted." });
});

export default router;
