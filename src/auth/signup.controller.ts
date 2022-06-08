import { Request, Response } from 'express'
export const signupController = (request: Request, response: Response) => {
  const { email, password, passwordConfirmation } = request.body

  if (!email) {
    response.status(400).json({
      message: '"email" es un dato requerido',
    })
  }
  if (!password) {
    response.status(400).json({
      message: '"password" es un dato requerido',
    })
  }
  if (!passwordConfirmation) {
    response.status(400).json({
      message: '"passwordConfirmation" es un dato requerido',
    })
  }
  if (password !== passwordConfirmation) {
    response.status(400).json({
      message: '"password" y "passwordConfirmation" deben ser iguales',
    })
  }
  if (
    email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    ) === null
  ) {
    response.status(400).json({
      message: '"email" no es una direccion de correo valida',
    })
  }
  response.status(201).send({})
}
