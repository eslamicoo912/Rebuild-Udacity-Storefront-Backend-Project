export const createOrder =
  'INSERT INTO orders(productId,quantity,userId,status) VALUES($1,$2,$3,$4) RETURNING *'
export const getMany = 'SELECT * FROM orders'
export const getOne = 'SELECT * FROM Orders WHERE id=$1'
export const updateOne =
  'UPDATE Orders SET productId=$1,quantity=$2,userId=$3,status=$4 WHERE id=$4 RETURNING *'
export const deleteOne = 'DELETE FROM Orders WHERE id=$1 RETURNING *'
export const addProduct =
  'INSERT INTO order_products (quantity , orderid , productid) VALUES ($1, $2, $3) RETURNING *'
