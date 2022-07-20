import {Request, Response} from "express";

//Model
import { MovieModel } from "../Models/Movie";

//Logger
import Logger from "../../config/logger";

//todas são Async pois vão trabalhar com BD então é necessário esperar ele responder
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

export async function GetMovieById(req:Request, res:Response) {
    try{
        const Id = req.params.id
        const movie = await MovieModel.findById(Id)
        if(movie){
            return res.status(200).json(movie)
        }else{
            return res.status(404).json({error: "O filme não existe"})
        }
    }
    catch(error : any){
        Logger.error(`Error no sistema ${error.message}`)
    }
}

export async function GetAllMovies(req:Request, res:Response) {
    try{
        const movie = await MovieModel.find()
        return res.status(200).json(movie)
    }
    catch(error : any){
        Logger.error(`Error no sistema ${error.message}`)
    }
}

export async function RemoveMovie(req:Request, res:Response) {
    try{
        const Id = req.params.id
        const movie = await MovieModel.findById(Id)
        if(movie){
            await movie.delete()
            return res.status(200).json({msg : "Filme removido"})
        }else{
            return res.status(404).json({error: "O filme não existe"})
        }
    }
    catch(error : any){
        Logger.error(`Error no sistema ${error.message}`)
    }
}

export async function UpdateMovie(req:Request, res:Response) {
    try{
        const Id = req.params.id
        const data = req.body
        const movie = await MovieModel.findById(Id)
        if(movie){ 
            await MovieModel.updateOne({_Id: Id}, data)
            return res.status(200).json({data})

        }else{
            return res.status(404).json({error: "O filme não existe"})
        }
    }
    catch(error : any){
        Logger.error(`Error no sistema ${error.message}`)
    }
}