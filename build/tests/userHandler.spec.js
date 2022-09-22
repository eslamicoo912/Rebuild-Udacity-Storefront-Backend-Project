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
var userModel_1 = __importDefault(require("../models/userModel"));
var supertest_1 = __importDefault(require("supertest"));
var database_1 = __importDefault(require("../database"));
var __1 = __importDefault(require(".."));
var request = (0, supertest_1.default)(__1.default);
var usermodel = new userModel_1.default();
describe('Test users model methods', function () {
    describe('Test methods exist', function () {
        it('Shuold find get many users method', function () {
            expect(usermodel.getAllUsers).toBeDefined();
        });
        it('Should find get one user method', function () {
            expect(usermodel.getOneUser).toBeDefined();
        });
        it('Sholud find update user model', function () {
            expect(usermodel.updateOneUser).toBeDefined();
        });
        it('Sholud find delete user model', function () {
            expect(usermodel.deleteOneUser).toBeDefined();
        });
    });
    describe('Test user model logic', function () {
        var firstname = 'Eslam';
        var lastname = 'Ashraf';
        var password = 'eslam900100';
        var id;
        beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var newUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, usermodel.createUser(firstname, lastname, password)];
                    case 1:
                        newUser = _a.sent();
                        id = newUser.id;
                        return [2 /*return*/];
                }
            });
        }); });
        afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var connection, sql, sql2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = 'DELETE FROM users;';
                        sql2 = 'ALTER SEQUENCE users_id_seq RESTART WITH 1';
                        return [4 /*yield*/, connection.query(sql)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, connection.query(sql2)];
                    case 3:
                        _a.sent();
                        connection.release();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should get many users', function () { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, usermodel.getAllUsers()];
                    case 1:
                        data = _a.sent();
                        expect(data.length).toBeGreaterThan(0);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return one user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, usermodel.getOneUser(id)];
                    case 1:
                        data = _a.sent();
                        expect(data.id).toBe(parseInt(id));
                        expect(data.firstname).toBe(firstname);
                        expect(data.lastname).toBe(lastname);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should update the user and return the new one', function () { return __awaiter(void 0, void 0, void 0, function () {
            var firstname, lastname, password, updatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        firstname = 'newEslam';
                        lastname = 'newAshraf';
                        password = 'newPAssword';
                        return [4 /*yield*/, usermodel.updateOneUser(firstname, lastname, password, id)];
                    case 1:
                        updatedUser = _a.sent();
                        expect(updatedUser.id).toBe(parseInt(id));
                        expect(updatedUser.firstname).toBe('newEslam');
                        expect(updatedUser.lastname).toBe('newAshraf');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should delete user and return the id', function () { return __awaiter(void 0, void 0, void 0, function () {
            var deletedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, usermodel.deleteOneUser(id)];
                    case 1:
                        deletedUser = _a.sent();
                        expect(deletedUser.id).toBe(parseInt(id));
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
describe('Test user endpoints', function () {
    it('test get /users endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/users')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test get users/1 endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.get('/users/1')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test post /users endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.post('/users')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test patch /users/1 endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.patch('/users/1')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
    it('test delete /users/:id endpoint', function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, request.delete('/users/1')];
                case 1:
                    res = _a.sent();
                    expect(res.status).toBe(200);
                    return [2 /*return*/];
            }
        });
    }); });
});
