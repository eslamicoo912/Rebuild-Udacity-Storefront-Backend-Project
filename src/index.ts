import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import userHandlers from './handlers/user.handlers'
import productHandlers from './handlers/product.handlers'

dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// middlewares
app.use(morgan('short'))
app.use(express.json())

// routes
userHandlers(app)
productHandlers(app)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})

export default app
