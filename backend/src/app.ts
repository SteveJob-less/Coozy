import express from "express";
import bodyParser from "body-parser"; 
import routes from "./routes";
import cors from "cors";
import corsOptions from "../config/corsOptions";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

export default app;