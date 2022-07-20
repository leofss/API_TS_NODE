import express from "express";
import config from "config";

const app = express();
//DB 
import db from "../config/db";
//Routes
import router from "./router";

//prefixo de URL
app.use("/api/",router);

//JSON midleware para poder trafegar informações com esse tipo de dado
app.use(express.json());

//app port 
const port = config.get<number>("port");

app.listen(port, async() =>{
    await db();
    
    console.log(`App na porta ${port} ok`);
})