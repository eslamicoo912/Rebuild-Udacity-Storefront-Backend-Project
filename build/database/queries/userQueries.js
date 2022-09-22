"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = exports.deleteOne = exports.updateOne = exports.getOne = exports.getMany = exports.createUser = void 0;
exports.createUser = "INSERT INTO users (firstName,lastName,password) VALUES($1, $2, $3) RETURNING *";
exports.getMany = "SELECT id,firstName,lastName FROM users";
exports.getOne = 'SELECT id,firstName,lastName FROM users WHERE id=$1';
exports.updateOne = 'UPDATE users SET firstName=$1,lastName=$2,password=$3 WHERE id=$4 RETURNING id,firstName,lastName';
exports.deleteOne = 'DELETE FROM users WHERE id=$1 RETURNING id,firstName,lastName';
exports.authenticate = 'SELECT password from users WHERE firstName=$1';
