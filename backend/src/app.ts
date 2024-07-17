import express, { Router, Request, Response } from "express";
import bodyParser from "body-parser"; 
import routes from "./routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

export default app;