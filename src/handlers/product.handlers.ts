import express, { Request, Response, NextFunction } from 'express'
import ProductModel from '../models/productModel'

const productmodel = new ProductModel()

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  const name = req.body.name
  const price = req.body.price
  try {
    const newProduct = await productmodel.createProduct(name, price)
    res.json(newProduct)
  } catch (error) {
    next(error)
  }
}

const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productmodel.getAllProducts()
    res.json(products)
  } catch (error) {
    next(error)
  }
}

const getOneProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productmodel.getOneProduct(req.params.id)
    res.json(product)
  } catch (error) {
    next(error)
  }
}

const updateOneProduct = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  const name = req.body.name
  const price = req.body.price

  try {
    const newProduct = await productmodel.updateOneProduct(name, price, id)
    res.json(newProduct)
  } catch (error) {
    next(error)
  }
}

const deleteOneProduct = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  try {
    await productmodel.deleteOneProduct(id)
    res.json(`product ${id} deleted`)
  } catch (error) {
    next(error)
  }
}

const routes = (app: express.Application) => {
  app.post('/products', createProduct)
  app.get('/products', getAllProducts)
  app.get('/products/:id', getOneProduct)
  app.patch('/products/:id', updateOneProduct)
  app.delete('/products/:id', deleteOneProduct)
}
export default routes
