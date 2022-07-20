import {Request, Response} from "express";

//Model
import { MovieModel } from "../Models/Movie";

//Logger
import Logger from "../../config/logger";

//todas são Async pois vão trabalhar com BD então é necessário esperar ee responder
export async function CreateMovie(req:Request, res:Response) {
    try{
        const data = req.body;
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)  
    }
    catch(error : any){
        Logger.error(`Error no sistema ${error.message}`)
    }
}