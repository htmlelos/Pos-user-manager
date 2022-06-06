import { Request, Response } from "express"
export const signupController = (request: Request, response: Response) => {
    const {email, password, passwordConfirmation} = request.body

    if (!email) {   
        response.status(400).json({
            message: '"email" es un dato requerido'
        })
    }
    if (!password) {
        response.status(400).json({
            message: '"password" es un dato requerido'
        })
    }
    if (!passwordConfirmation) {
        response.status(400).json({
            message: '"passwordConfirmation" es un dato requerido'
        })
    }
    if(password !== passwordConfirmation) {
        response.status(400).json({
            message: '"password" y "passwordConfirmation" deben ser iguales'
        })
    }
    response.status(201).send({})
}