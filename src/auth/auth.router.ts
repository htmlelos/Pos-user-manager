import { Router } from 'express'
import { signupController } from './signup.controller'

export const router = Router()
router.post('/signup', signupController)

