/* eslint-disable @typescript-eslint/no-empty-function */
import database from '../database'
import Product from '../types/Product'
import * as productQueries from '../database/queries/productQueries'

export default class ProductModel {
  async createProduct(name: string, price: number): Promise<Product> {
    try {
      const connection = await database.connect()
      const sql = productQueries.createProduct
      const result = await connection.query(sql, [name, price])
      const finalResult = result.rows[0]
      connection.release()
      return finalResult
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  // function to run the query that get all products from the database
  async getAllProducts(): Promise<Product[]> {
    try {
      const connection = await database.connect()
      const sql = productQueries.getMany
      const result = await connection.query(sql)
      const finalResult = result.rows
      connection.release()
      return finalResult
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async getOneProduct(id: string): Promise<Product> {
    try {
      const connection = await database.connect()
      const sql = productQueries.getOne
      const result = await connection.query(sql, [id])
      const finalResult = result.rows[0]
      connection.release()
      return finalResult
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async updateOneProduct(name: string, price: number, id: string): Promise<Product> {
    try {
      const connection = await database.connect()
      const sql = productQueries.updateOne
      const result = await connection.query(sql, [name, price, id])
      const finalResult = result.rows[0]
      connection.release()
      return finalResult
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  // function to run the query that delete a product from the database
  async deleteOneProduct(id: string): Promise<Product> {
    try {
      const connection = await database.connect()
      const sql = productQueries.deleteOne
      const result = await connection.query(sql, [id])
      const finalResult = result.rows[0]
      connection.release()
      return finalResult
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }
}
