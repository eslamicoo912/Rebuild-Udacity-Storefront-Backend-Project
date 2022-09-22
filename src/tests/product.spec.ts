import app from '..'
import supertest from 'supertest'
import ProductModel from '../models/productModel'
import database from '../database'

const request = supertest(app)
const productmodel = new ProductModel()

describe('Test product model', () => {
  describe('test mehtods exist', () => {
    it('should find create product method', () => {
      expect(productmodel.createProduct).toBeDefined()
    })
    it('should find get products method', () => {
      expect(productmodel.getAllProducts).toBeDefined()
    })
    it('should find get one product method', () => {
      expect(productmodel.getOneProduct).toBeDefined()
    })
    it('should find update product method', () => {
      expect(productmodel.updateOneProduct).toBeDefined()
    })
    it('should find delete product method', () => {
      expect(productmodel.deleteOneProduct).toBeDefined()
    })
  })

  describe('test methods logic', () => {
    afterAll(async () => {
      const connection = await database.connect()
      const sql = 'DELETE FROM products;'
      const sql2 = 'ALTER SEQUENCE products_id_seq RESTART WITH 1'
      await connection.query(sql)
      await connection.query(sql2)
      connection.release()
    })

    it('test create product method', async () => {
      const name = 'phone'
      const price = 1850
      const result = await productmodel.createProduct(name, price)
      expect(result).toEqual({
        id: 3,
        name: 'phone',
        price: 1850
      })
    })
    it('test get products method', async () => {
      const results = await productmodel.getAllProducts()
      expect(results.length).toBeGreaterThan(0)
    })
    it('test get one product', async () => {
      const result = await productmodel.getOneProduct('2')
      expect(result.name).toBe('phone')
    })
    it('should update product and return the new one', async () => {
      const id = '2'
      const name = 'newPhone'
      const price = 2000
      const updatedProduct = await productmodel.updateOneProduct(name, price, id)
      expect(updatedProduct.name).toBe('newPhone')
      expect(updatedProduct.price).toBe(2000)
    })
    it('should delete product and return its id', async () => {
      const result = await productmodel.deleteOneProduct('2')
      expect(result.id).toBe(2)
    })
  })
})

describe('Test products endpoints', () => {
  it('test get /products endpoint', async () => {
    const res = await request.get('/products')
    expect(res.status).toBe(200)
  })
  it('test get /products/1 endpoint', async () => {
    const res = await request.get('/products/1')
    expect(res.status).toBe(200)
  })
  it('test post /products endpoint', async () => {
    const res = await request.post('/products')
    expect(res.status).toBe(200)
  })

  it('test patch /products/1 endpoint', async () => {
    const res = await request.delete('/products/1')
    expect(res.status).toBe(200)
  })

  it('test delete /products/1 endpoint', async () => {
    const res = await request.delete('/products/1')
    expect(res.status).toBe(200)
  })
})
