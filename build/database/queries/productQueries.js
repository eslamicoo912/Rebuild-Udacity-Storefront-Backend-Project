"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.updateOne = exports.getOne = exports.getMany = exports.createProduct = void 0;
exports.createProduct = "INSERT INTO products (name,price) VALUES($1, $2) returning *";
exports.getMany = 'SELECT * FROM Products';
exports.getOne = 'SELECT * FROM Products WHERE id=$1';
exports.updateOne = 'UPDATE products SET name=$1,price=$2 WHERE id=$3 RETURNING *';
exports.deleteOne = 'DELETE FROM Products WHERE id=$1 RETURNING *';
