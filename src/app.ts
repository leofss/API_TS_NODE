//ENV var
require("dotenv").config();

import express from "express";
import config from "config";

const app = express();
//DB 
import db from "../config/db";
//Mid (antes das rotas)
import MorganMid from "./Middleware/MorganMid"
//Routes
import router from "./router";
//Loger
import Logger from "../config/logger";

//prefixo de URL
app.use(MorganMid);
app.use("/api/",router);

//JSON midleware para poder trafegar informações com esse tipo de dado
app.use(express.json());

//app port 
const port = config.get<number>("port");

app.listen(port, async() =>{
    await db();

    Logger.info(`App na porta ${port} ok`);
})