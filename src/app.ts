//ENV var
require("dotenv").config();

import express from "express";
import config from "config";

//DB 
import db from "../config/db";
//Routes
import router from "./router";
//Loger
import Logger from "../config/logger";
//Mid (antes das rotas)
import MorganMid from "./Middleware/MorganMid"

const app = express();

//JSON midleware para poder trafegar informações com esse tipo de dado
app.use(express.json());

//prefixo de URL
app.use(MorganMid);
app.use("/api/",router);

//app port 
const port = config.get<number>("port");

app.listen(port, async() =>{
    await db();

    Logger.info(`App na porta ${port} ok`);
})