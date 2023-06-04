import express from "express";
import cors from "cors";
import rootRouter from "./routers/rootRouter.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.static("."));
app.use(cors());

// Router
app.use("/api", rootRouter);

app.listen(8080);
