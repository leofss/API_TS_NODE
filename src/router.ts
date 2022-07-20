import {Router, Request, Response} from "express";
import { CreateMovie } from "./Controllers/MovieControllers";

const router = Router();

export default router.get("/test", (req:Request, res:Response) => {
    res.status(200).send("Hello World API");
}).post("/movie", CreateMovie);