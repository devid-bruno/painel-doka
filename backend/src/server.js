import express, { json } from "express";
import routes from "./routes.js";
import cors from 'cors';

const app = express();


app.use(json());
app.use(cors());
app.use(routes);


app.get("/", (req, res) => {
    res.send("hello world");
});

app.listen(3000, () => {
    console.log("servidor rodando");
});