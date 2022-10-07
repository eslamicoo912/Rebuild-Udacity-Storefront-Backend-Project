"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var validateToken = function (req, res, next) {
    try {
        var token = void 0;
        var authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith('Bearer')) {
            try {
                // get the token from the header
                token = authHeader.split(' ')[1];
                // verify token
                var decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
                // get user from the token
                res.locals.userData = decoded;
                next();
            }
            catch (error) {
                res.status(401).json({ message: 'invalid token' });
            }
        }
        if (!token) {
            res.status(401).json({ message: 'no token' });
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.validateToken = validateToken;
