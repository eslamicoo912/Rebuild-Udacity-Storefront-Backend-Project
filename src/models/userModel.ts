/* eslint-disable @typescript-eslint/no-empty-function */
import database from '../database'
import User from '../types/User'
import bcrypt from 'bcrypt'
import * as userQueries from '../database/queries/userQueries'
import config from '../config'

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(`${password}${config.pepper}`, parseInt(config.salt as string, 10))
}

class UserModel {
  async createUser(firstname: string, lastname: string, password: string): Promise<User> {
    try {
      const connection = await database.connect()
      const sql = userQueries.createUser
      const result = await connection.query(sql, [firstname, lastname, hashPassword(password)])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const connection = await database.connect()
      const sql = userQueries.getMany
      const result = await connection.query(sql)
      connection.release()
      return result.rows
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async getOneUser(id: string): Promise<User> {
    try {
      const connection = await database.connect()
      const sql = userQueries.getOne
      const result = await connection.query(sql, [id])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async updateOneUser(
    firstname: string,
    lastname: string,
    password: string,
    id: string
  ): Promise<User> {
    try {
      const connection = await database.connect()
      const sql = userQueries.updateOne
      const result = await connection.query(sql, [firstname, lastname, hashPassword(password), id])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async deleteOneUser(id: string): Promise<User> {
    try {
      const connection = await database.connect()
      const sql = userQueries.deleteOne
      const result = await connection.query(sql, [id])
      connection.release()
      return result.rows[0]
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }

  async authenticateUser(firstName: string, password: string): Promise<User | null> {
    try {
      const connection = await database.connect()
      const sql = userQueries.authenticate
      const result = await connection.query(sql, [firstName])
      if (result.rows.length) {
        const { password: hashPassword } = result.rows[0]
        const isValidPassword = bcrypt.compareSync(`${password}${config.pepper}`, hashPassword)
        if (isValidPassword) {
          const userInfo = await connection.query(
            'SELECT id,firstName,lastName FROM users WHERE firstName=$1',
            [firstName]
          )
          return userInfo.rows[0]
        }
      }
      connection.release()
      return null
    } catch (error) {
      throw new Error((error as Error).message)
    }
  }
}

export default UserModel
