import express, { Request, Response, NextFunction } from 'express'
import UserModel from '../models/userModel'
import jwt from 'jsonwebtoken'
import config from '../config'
import { validateToken } from '../middleware/authentication.middleware'

const usermodel = new UserModel()

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const password = req.body.password
  try {
    const newUser = await usermodel.createUser(firstname, lastname, password)
    const token = jwt.sign({ newUser }, config.token as unknown as string)
    res.json(token)
  } catch (error) {
    next(error)
  }
}

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await usermodel.getAllUsers()
    res.json(users)
  } catch (error) {
    next(error)
  }
}

const getOneUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const user = await usermodel.getOneUser(id)
    res.json(user)
  } catch (error) {
    next(error)
  }
}

const updateOneUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const firstname = req.body.firstname
  const lastname = req.body.lastname
  const password = req.body.password

  try {
    const newUser = await usermodel.updateOneUser(firstname, lastname, password, id)
    res.json(newUser)
  } catch (error) {
    next(error)
  }
}

const deleteOneUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  try {
    await usermodel.deleteOneUser(id)
    res.json(`user ${id} deleted successfully`)
  } catch (error) {
    next(error)
  }
}

const authenticateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { firstname, password } = req.body
    const user = await usermodel.authenticateUser(firstname, password)
    const token = jwt.sign({ user }, config.token as unknown as string)
    if (!user) {
      return res.status(401).json({
        status: 'error',
        messagae: 'username and password do not match'
      })
    }
    return res.status(200).json({
      status: 'success',
      data: { ...user, token },
      messgae: 'authenticated successfully'
    })
  } catch (error) {
    next(error)
  }
}

const routes = (app: express.Application) => {
  app.post('/users', createUser)
  app.post('/authenticate', authenticateUser)
  app.get('/users', validateToken, getAllUsers)
  app.get('/users/:id', validateToken, getOneUser)
  app.patch('/users/:id', updateOneUser)
  app.delete('/users/:id', deleteOneUser)
}

export default routes
