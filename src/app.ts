import express, {Request, Response} from 'express'
import { router as userRouter} from './auth/auth.router'

const app = express()

app.use(express.json())
app.use('/api', userRouter)

export default app
