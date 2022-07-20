import { Request, Response, NextFunction, response } from "express";
import { validationResult } from "express-validator";

export const Validate = (req : Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    const ExtractedErrors : object[] = []
    if(errors.isEmpty()){
        return next()
    }else{
        errors.array().map((err) => ExtractedErrors.push({[err.param]: err.msg}))
        return res.status(422).json({
            errors : ExtractedErrors,
        });
    }
}