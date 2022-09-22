import database from '../database'
import Order from '../types/Order'
import * as orderQueries from '../database/queries/orderQueries'

export default class OrderModel {
  async createOrder(
    productid: string,
    quantity: string,
    userid: string,
    status: string
  ): Promise<Order> {
    try {
      const connection = await database.connect()
      const sql = orderQueries.createOrder
      const result = await connection.query(sql, [productid, quantity, userid, status])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async getAllOrders(): Promise<Order[]> {
    try {
      const connection = await database.connect()
      const sql = orderQueries.getMany
      const result = await connection.query(sql)
      connection.release()
      return result.rows
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async getOneOrder(id: string): Promise<Order> {
    try {
      const connection = await database.connect()
      const sql = orderQueries.getOne
      const result = await connection.query(sql, [id])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async updateOneOrder(
    productid: string,
    quantity: string,
    userid: string,
    id: string,
    status: string
  ): Promise<Order> {
    try {
      const connection = await database.connect()
      const sql = orderQueries.updateOne
      const result = await connection.query(sql, [productid, quantity, userid, status, id])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async deleteOneOrder(id: string): Promise<Order> {
    try {
      const connection = await database.connect()
      const sql = orderQueries.deleteOne
      const result = await connection.query(sql, [id])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async addProductToOrder(quantity: number, orderid: string, productid: string): Promise<Order> {
    try {
      const connection = await database.connect()
      const sql = orderQueries.addProduct
      const result = await connection.query(sql, [quantity, orderid, productid])
      const order = result.rows[0]
      connection.release()
      return order
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }
}
