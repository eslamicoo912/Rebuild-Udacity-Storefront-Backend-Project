"use strict";
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
var __1 = __importDefault(require(".."));
var database_1 = __importDefault(require("../database"));
var orderModel_1 = __importDefault(require("../models/orderModel"));
var supertest_1 = __importDefault(require("supertest"));
var userModel_1 = __importDefault(require("../models/userModel"));
var productModel_1 = __importDefault(require("../models/productModel"));
var request = (0, supertest_1.default)(__1.default);
var usermodel = new userModel_1.default();
var productmodel = new productModel_1.default();
var ordermodel = new orderModel_1.default();
describe('Test orders model', function () {
    describe('Test methods exist', function () {
        it('should find create order method', function () {
            expect(ordermodel.createOrder).toBeDefined();
        });
        it('should find get many orders method', function () {
            expect(ordermodel.getAllOrders).toBeDefined();
        });
        it('should find get one order method', function () {
            expect(ordermodel.getOneOrder).toBeDefined();
        });
        it('should find update user method', function () {
            expect(ordermodel.updateOneOrder).toBeDefined();
        });
        it('should find delete user method', function () {
            expect(ordermodel.deleteOneOrder).toBeDefined();
        });
    });
    describe('Test order model logic', function () {
        beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var firstname, lastname, password, name, price;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstname = 'Eslam';
                        lastname = 'Ashraf';
                        password = 'eslam900190';
                        name = 'phone';
                        price = 100;
                        return [4 /*yield*/, usermodel.createUser(firstname, lastname, password)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, productmodel.createProduct(name, price)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var connection, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = 'ALTER SEQUENCE orders_id_seq RESTART WITH 1';
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        _a.sent();
                        connection.release();
                        return [4 /*yield*/, usermodel.deleteOneUser('1')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, productmodel.deleteOneProduct('1')];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('test create order', function () { return __awaiter(void 0, void 0, void 0, function () {
            var productid, quantity, userid, status, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        productid = '1';
                        quantity = '15';
                        userid = '2';
                        status = 'active';
                        return [4 /*yield*/, ordermodel.createOrder(productid, quantity, userid, status)];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual({
                            id: 2,
                            productid: 1,
                            quantity: 15,
                            userid: 2,
                            status: 'active'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('test getMany orders', function () { return __awaiter(void 0, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ordermodel.getAllOrders()];
                    case 1:
                        results = _a.sent();
                        expect(results.length).toBeGreaterThan(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it('test get one order', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ordermodel.getOneOrder('2')];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual({
                            id: 2,
                            productid: 1,
                            quantity: 15,
                            userid: 2,
                            status: 'active'
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('test delete order', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ordermodel.deleteOneOrder('2')];
                    case 1:
                        result = _a.sent();
                        expect(result.id).toEqual(2);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
describe('Test order endpoints', function () {
    it('test get /orders endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/orders')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test get /orders/2 endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/orders/2')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test post /orders endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.post('/orders')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test patch /orders/1 endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.patch('/orders/2')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test delete /orders/2 endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.delete('/orders/2')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
