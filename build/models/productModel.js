"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-empty-function */
var database_1 = __importDefault(require("../database"));
var productQueries = __importStar(require("../database/queries/productQueries"));
var ProductModel = /** @class */ (function () {
    function ProductModel() {
    }
    ProductModel.prototype.createProduct = function (name, price) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, finalResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = productQueries.createProduct;
                        return [4 /*yield*/, connection.query(sql, [name, price])];
                    case 2:
                        result = _a.sent();
                        finalResult = result.rows[0];
                        connection.release();
                        return [2 /*return*/, finalResult];
                    case 3:
                        error_1 = _a.sent();
                        throw new Error(error_1.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // function to run the query that get all products from the database
    ProductModel.prototype.getAllProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, finalResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = productQueries.getMany;
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        result = _a.sent();
                        finalResult = result.rows;
                        connection.release();
                        return [2 /*return*/, finalResult];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.getOneProduct = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, finalResult, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = productQueries.getOne;
                        return [4 /*yield*/, connection.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        finalResult = result.rows[0];
                        connection.release();
                        return [2 /*return*/, finalResult];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ProductModel.prototype.updateOneProduct = function (name, price, id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, finalResult, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = productQueries.updateOne;
                        return [4 /*yield*/, connection.query(sql, [name, price, id])];
                    case 2:
                        result = _a.sent();
                        finalResult = result.rows[0];
                        connection.release();
                        return [2 /*return*/, finalResult];
                    case 3:
                        error_4 = _a.sent();
                        throw new Error(error_4.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // function to run the query that delete a product from the database
    ProductModel.prototype.deleteOneProduct = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, sql, result, finalResult, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = productQueries.deleteOne;
                        return [4 /*yield*/, connection.query(sql, [id])];
                    case 2:
                        result = _a.sent();
                        finalResult = result.rows[0];
                        connection.release();
                        return [2 /*return*/, finalResult];
                    case 3:
                        error_5 = _a.sent();
                        throw new Error(error_5.message);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ProductModel;
}());
exports.default = ProductModel;
