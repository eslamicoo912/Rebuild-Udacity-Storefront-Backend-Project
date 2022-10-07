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
var userModel_1 = __importDefault(require("../models/userModel"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = __importDefault(require("../config"));
var authentication_middleware_1 = require("../middleware/authentication.middleware");
var usermodel = new userModel_1.default();
var createUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var firstname, lastname, password, newUser, token, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                firstname = req.body.firstname;
                lastname = req.body.lastname;
                password = req.body.password;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usermodel.createUser(firstname, lastname, password)];
            case 2:
                newUser = _a.sent();
                token = jsonwebtoken_1.default.sign({ newUser: newUser }, config_1.default.token);
                res.json(token);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var getAllUsers = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, usermodel.getAllUsers()];
            case 1:
                users = _a.sent();
                res.json(users);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                next(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getOneUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = req.params.id;
                return [4 /*yield*/, usermodel.getOneUser(id)];
            case 1:
                user = _a.sent();
                res.json(user);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                next(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var updateOneUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, firstname, lastname, password, newUser, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                firstname = req.body.firstname;
                lastname = req.body.lastname;
                password = req.body.password;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usermodel.updateOneUser(firstname, lastname, password, id)];
            case 2:
                newUser = _a.sent();
                res.json(newUser);
                return [3 /*break*/, 4];
            case 3:
                error_4 = _a.sent();
                next(error_4);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var deleteOneUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, usermodel.deleteOneUser(id)];
            case 2:
                _a.sent();
                res.json("user ".concat(id, " deleted successfully"));
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                next(error_5);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var authenticateUser = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, firstname, password, user, token, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, firstname = _a.firstname, password = _a.password;
                return [4 /*yield*/, usermodel.authenticateUser(firstname, password)];
            case 1:
                user = _b.sent();
                token = jsonwebtoken_1.default.sign({ user: user }, config_1.default.token);
                if (!user) {
                    return [2 /*return*/, res.status(401).json({
                            status: 'error',
                            messagae: 'username and password do not match'
                        })];
                }
                return [2 /*return*/, res.status(200).json({
                        status: 'success',
                        data: __assign(__assign({}, user), { token: token }),
                        messgae: 'authenticated successfully'
                    })];
            case 2:
                error_6 = _b.sent();
                next(error_6);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var routes = function (app) {
    app.post('/users', createUser);
    app.post('/authenticate', authenticateUser);
    app.get('/users', authentication_middleware_1.validateToken, getAllUsers);
    app.get('/users/:id', authentication_middleware_1.validateToken, getOneUser);
    app.patch('/users/:id', updateOneUser);
    app.delete('/users/:id', deleteOneUser);
};
exports.default = routes;
