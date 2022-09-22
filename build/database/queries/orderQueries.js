"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.deleteOne = exports.updateOne = exports.getOne = exports.getMany = exports.createOrder = void 0;
exports.createOrder = 'INSERT INTO orders(productId,quantity,userId,status) VALUES($1,$2,$3,$4) RETURNING *';
exports.getMany = 'SELECT * FROM orders';
exports.getOne = 'SELECT * FROM Orders WHERE id=$1';
exports.updateOne = 'UPDATE Orders SET productId=$1,quantity=$2,userId=$3,status=$4 WHERE id=$4 RETURNING *';
exports.deleteOne = 'DELETE FROM Orders WHERE id=$1 RETURNING *';
exports.addProduct = 'INSERT INTO order_products (quantity , orderid , productid) VALUES ($1, $2, $3) RETURNING *';
