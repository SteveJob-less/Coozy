import express from "express";
import bodyParser from "body-parser"; 
import routes from "./routes";
import cors from "cors";
import corsOptions from "../config/corsOptions";

const app = express();

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

export default app;