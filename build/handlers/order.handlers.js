"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var orderModel_1 = __importDefault(require("../models/orderModel"));
var ordermodel = new orderModel_1.default();
var createOrder = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var productid, quantity, userid, status_1, newOrder, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                productid = req.body.productid;
                quantity = req.body.quantity;
                userid = req.body.userid;
                status_1 = req.body.status;
                return [4 /*yield*/, ordermodel.createOrder(productid, quantity, userid, status_1)];
            case 1:
                newOrder = _a.sent();
                res.json(newOrder);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getAllOrders = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var orders, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, ordermodel.getAllOrders()];
            case 1:
                orders = _a.sent();
                res.json(orders);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getOneOrder = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, order, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ordermodel.getOneOrder(id)];
            case 2:
                order = _a.sent();
                res.json(order);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var updateOneOrder = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, productid, quantity, userid, status, newOrder, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                productid = req.body.productid;
                quantity = req.body.quantity;
                userid = req.body.userid;
                status = req.body.status;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ordermodel.updateOneOrder(productid, quantity, userid, id, status)];
            case 2:
                newOrder = _a.sent();
                res.json(newOrder);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deleteOneOrder = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ordermodel.deleteOneOrder(id)];
            case 2:
                _a.sent();
                res.json("order ".concat(id, " deleted successfully"));
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var addProductToOrder = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var orderid, productid, quantity, order, error_6;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                orderid = req.params.id;
                productid = req.body.productid;
                quantity = parseInt(req.body.quantity);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, ordermodel.addProductToOrder(quantity, orderid, productid)];
            case 2:
                order = _a.sent();
                res.json({
                    status: 'success',
                    data: __assign({}, order),
                    message: "product ".concat(productid, " added to order ").concat(orderid)
                });
                return [3 /*break*/, 4];
            case 3:
                error_6 = _a.sent();
                next(error_6);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var routes = function (app) {
    app.post('/orders', createOrder);
    app.post('/orders/:id/products', addProductToOrder);
    app.get('/orders', getAllOrders);
    app.get('/orders/:id', getOneOrder);
    app.patch('/orders/:id', updateOneOrder);
    app.delete('/orders/:id', deleteOneOrder);
};
exports.default = routes;
