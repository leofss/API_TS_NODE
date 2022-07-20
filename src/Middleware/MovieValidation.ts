import {body} from "express-validator";

export const MovieCreateValidation = () => {
    return [
        body("title").isString().withMessage("Titulo obrigatório"),
        body("rating").isNumeric().withMessage("A nota precisa ser um número")
        .custom((value : number) => {
            if(value < 0 ||value > 10){
                throw new Error("A nota precisa ser entre 0 e 10")
            }else{
                return true
            }
        }),
        body("desc").isString().withMessage("Descrição obrigatório"),
        body("director").isString().withMessage("Nome do diretor obrigatório"),
        body("poster").isURL().withMessage("A imagem precisa ser uma url")
    ]
}