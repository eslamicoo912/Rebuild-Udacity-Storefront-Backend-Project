import OrderModel from '../models/orderModel'
import { NextFunction, Request, Response } from 'express'
import express from 'express'

const ordermodel = new OrderModel()

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productid = req.body.productid
    const quantity = req.body.quantity
    const userid = req.body.userid
    const status = req.body.status
    const newOrder = await ordermodel.createOrder(productid, quantity, userid, status)
    res.json({
      status: 'success',
      data: { ...newOrder },
      message: 'order created successfully'
    })
  } catch (error) {
    next(error)
  }
}

const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await ordermodel.getAllOrders()
    res.json(orders)
  } catch (error) {
    next(error)
  }
}

const getOneOrder = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  try {
    const order = await ordermodel.getOneOrder(id)
    res.json(order)
  } catch (error) {
    next(error)
  }
}

const updateOneOrder = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const productid = req.body.productid
  const quantity = req.body.quantity
  const userid = req.body.userid
  const status = req.body.status

  try {
    const newOrder = await ordermodel.updateOneOrder(productid, quantity, userid, id, status)
    res.json(newOrder)
  } catch (error) {
    next(error)
  }
}

const deleteOneOrder = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  try {
    await ordermodel.deleteOneOrder(id)
    res.json(`order ${id} deleted successfully`)
  } catch (error) {
    next(error)
  }
}

const addProductToOrder = async (req: Request, res: Response, next: NextFunction) => {
  const orderid: string = req.params.id
  const productid: string = req.body.productid
  const quantity: number = parseInt(req.body.quantity)

  try {
    const order = await ordermodel.addProductToOrder(quantity, orderid, productid)
    res.json({
      status: 'success',
      data: { ...order },
      message: `product ${productid} added to order ${orderid}`
    })
  } catch (error) {
    next(error)
  }
}

const routes = (app: express.Application) => {
  app.post('/orders', createOrder)
  app.post('/orders/:id/products', addProductToOrder)
  app.get('/orders', getAllOrders)
  app.get('/orders/:id', getOneOrder)
  app.patch('/orders/:id', updateOneOrder)
  app.delete('/orders/:id', deleteOneOrder)
}

export default routes
