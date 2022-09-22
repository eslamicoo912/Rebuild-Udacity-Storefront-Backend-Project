export const createUser = `INSERT INTO users (firstName,lastName,password) VALUES($1, $2, $3) RETURNING *`
export const getMany = `SELECT id,firstName,lastName FROM users`
export const getOne = 'SELECT id,firstName,lastName FROM users WHERE id=$1'
export const updateOne =
  'UPDATE users SET firstName=$1,lastName=$2,password=$3 WHERE id=$4 RETURNING id,firstName,lastName'
export const deleteOne = 'DELETE FROM users WHERE id=$1 RETURNING id,firstName,lastName'
export const authenticate = 'SELECT password from users WHERE firstName=$1'
