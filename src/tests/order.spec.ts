import app from '..'
import database from '../database'
import OrderModel from '../models/orderModel'
import supertest from 'supertest'
import UserModel from '../models/userModel'
import ProductModel from '../models/productModel'

const request = supertest(app)
const usermodel = new UserModel()
const productmodel = new ProductModel()
const ordermodel = new OrderModel()

describe('Test orders model', () => {
  describe('Test methods exist', () => {
    it('should find create order method', () => {
      expect(ordermodel.createOrder).toBeDefined()
    })
    it('should find get many orders method', () => {
      expect(ordermodel.getAllOrders).toBeDefined()
    })
    it('should find get one order method', () => {
      expect(ordermodel.getOneOrder).toBeDefined()
    })
    it('should find update user method', () => {
      expect(ordermodel.updateOneOrder).toBeDefined()
    })
    it('should find delete user method', () => {
      expect(ordermodel.deleteOneOrder).toBeDefined()
    })
  })

  describe('Test order model logic', () => {
    beforeAll(async () => {
      const firstname = 'Eslam'
      const lastname = 'Ashraf'
      const password = 'eslam900190'
      const name = 'phone'
      const price = 100
      await usermodel.createUser(firstname, lastname, password)
      await productmodel.createProduct(name, price)
    })

    afterAll(async () => {
      const connection = await database.connect()
      const sql = 'ALTER SEQUENCE orders_id_seq RESTART WITH 1'
      await connection.query(sql)
      connection.release()
      await usermodel.deleteOneUser('1')
      await productmodel.deleteOneProduct('1')
    })

    it('test create order', async () => {
      const productid = '1'
      const quantity = '15'
      const userid = '2'
      const status = 'active'
      const result = await ordermodel.createOrder(productid, quantity, userid, status)
      expect(result).toEqual({
        id: 2,
        productid: 1,
        quantity: 15,
        userid: 2,
        status: 'active'
      })
    })
    it('test getMany orders', async () => {
      const results = await ordermodel.getAllOrders()
      expect(results.length).toBeGreaterThan(0)
    })
    it('test get one order', async () => {
      const result = await ordermodel.getOneOrder('2')
      expect(result).toEqual({
        id: 2,
        productid: 1,
        quantity: 15,
        userid: 2,
        status: 'active'
      })
    })
    it('test delete order', async () => {
      const result = await ordermodel.deleteOneOrder('2')
      expect(result.id).toEqual(2)
    })
  })
})

describe('Test order endpoints', () => {
  it('test get /orders endpoint', async () => {
    const res = await request.get('/orders')
    expect(res.status).toBe(200)
  })
  it('test get /orders/2 endpoint', async () => {
    const res = await request.get('/orders/2')
    expect(res.status).toBe(200)
  })

  it('test patch /orders/2 endpoint', async () => {
    const res = await request.patch('/orders/2')
    expect(res.status).toBe(200)
  })
  it('test delete /orders/2 endpoint', async () => {
    const res = await request.delete('/orders/2')
    expect(res.status).toBe(200)
  })
})
