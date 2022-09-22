import UserModel from '../models/userModel'
import supertest from 'supertest'
import database from '../database'
import app from '..'

const request = supertest(app)

const usermodel = new UserModel()

describe('Test users model methods', () => {
  describe('Test methods exist', () => {
    it('Shuold find get many users method', () => {
      expect(usermodel.getAllUsers).toBeDefined()
    })
    it('Should find get one user method', () => {
      expect(usermodel.getOneUser).toBeDefined()
    })
    it('Sholud find update user model', () => {
      expect(usermodel.updateOneUser).toBeDefined()
    })
    it('Sholud find delete user model', () => {
      expect(usermodel.deleteOneUser).toBeDefined()
    })
  })

  describe('Test user model logic', () => {
    const firstname = 'Eslam'
    const lastname = 'Ashraf'
    const password = 'eslam900100'
    let id: string

    beforeAll(async () => {
      const newUser = await usermodel.createUser(firstname, lastname, password)
      id = newUser.id as unknown as string
    })

    afterAll(async () => {
      const connection = await database.connect()
      const sql = 'DELETE FROM users;'
      const sql2 = 'ALTER SEQUENCE users_id_seq RESTART WITH 1'
      await connection.query(sql)
      await connection.query(sql2)
      connection.release()
    })

    it('should get many users', async () => {
      const data = await usermodel.getAllUsers()
      expect(data.length).toBeGreaterThan(0)
    })

    it('should return one user', async () => {
      const data = await usermodel.getOneUser(id as unknown as string)
      expect(data.id).toBe(parseInt(id))
      expect(data.firstname).toBe(firstname)
      expect(data.lastname).toBe(lastname)
    })

    it('should update the user and return the new one', async () => {
      const firstname = 'newEslam'
      const lastname = 'newAshraf'
      const password = 'newPAssword'
      const updatedUser = await usermodel.updateOneUser(firstname, lastname, password, id)

      expect(updatedUser.id).toBe(parseInt(id))
      expect(updatedUser.firstname).toBe('newEslam')
      expect(updatedUser.lastname).toBe('newAshraf')
    })

    it('should delete user and return the id', async () => {
      const deletedUser = await usermodel.deleteOneUser(id as unknown as string)
      expect(deletedUser.id).toBe(parseInt(id))
    })
  })
})

describe('Test user endpoints', () => {
  it('test get /users endpoint', async () => {
    const res = await request.get('/users')
    expect(res.status).toBe(200)
  })

  it('test get users/1 endpoint', async () => {
    const res = await request.get('/users/1')
    expect(res.status).toBe(200)
  })

  it('test post /users endpoint', async () => {
    const res = await request.post('/users')
    expect(res.status).toBe(200)
  })

  it('test patch /users/1 endpoint', async () => {
    const res = await request.patch('/users/1')
    expect(res.status).toBe(200)
  })

  it('test delete /users/:id endpoint', async () => {
    const res = await request.delete('/users/1')
    expect(res.status).toBe(200)
  })
})
