import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import todoRoutes from "./routes/todo.ts";

const app = express();
app.use(express.json());

app.use(todoRoutes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: "An error occurred!" });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

// To run typescript   without the need to transpile run the following command:
// node --experimental-strip-types app.ts
