export const createProduct = `INSERT INTO products (name,price) VALUES($1, $2) returning *`
export const getMany = 'SELECT * FROM Products'
export const getOne = 'SELECT * FROM Products WHERE id=$1'
export const updateOne = 'UPDATE products SET name=$1,price=$2 WHERE id=$3 RETURNING *'
export const deleteOne = 'DELETE FROM Products WHERE id=$1 RETURNING *'
