import express, { Router, Request, Response } from "express";
import bodyParser from "body-parser"; 
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type, Authorization",
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

export default app;