import express from "express";
import config from "config";

const app = express();

//Routes
import router from "./router";

//prefixo de URL
app.use("/api/",router);

//JSON midleware para poder trafegar informações com esse tipo de dado
app.use(express.json());

//app port 
const port = config.get<number>("port");

app.listen(port, async() =>{
    console.log(`App na porta ${port} ok`);
})