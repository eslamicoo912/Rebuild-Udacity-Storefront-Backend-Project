import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import userHandler from './handlers/user.handlers'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// middlewares
app.use(morgan('short'))
app.use(express.json())

// routes
userHandler(app)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
