import jsonwebtoken from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    let token
    const authHeader = req.headers.authorization
    if (authHeader && authHeader.startsWith('Bearer')) {
      try {
        // get the token from the header
        token = authHeader.split(' ')[1]

        // verify token
        const decoded = jsonwebtoken.verify(token, process.env.TOKEN_SECRET as string)

        // get user from the token
        res.locals.userData = decoded
        next()
      } catch (error) {
        res.status(401).json({ message: 'invalid token' })
      }
    }
    if (!token) {
      res.status(401).json({ message: 'no token' })
    }
  } catch (error) {
    console.log(error)
  }
}
