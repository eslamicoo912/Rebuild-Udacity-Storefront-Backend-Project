import { Pool } from 'pg'
import config from '../config'

const pool = new Pool({
  host: config.host,
  port: parseInt(config.port as string, 10),
  database: config.database,
  user: config.user,
  password: config.password
})

pool.on('error', (error) => {
  console.error(error)
})

export default pool
