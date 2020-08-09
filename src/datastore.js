"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByIndex = void 0;
var casual_1 = __importDefault(require("casual"));
var hobbies = [
    'soccer',
    'travelling',
    'dancing',
    'painting',
    'sailing',
    'fishing',
    'movies',
    'coding',
];
function generateUser() {
    return {
        age: casual_1.default.integer(20, 30),
        email: casual_1.default.email,
        hobbies: [casual_1.default.random_element(hobbies)],
        id: casual_1.default.integer(1, 10),
        name: casual_1.default.name,
    };
}
var USERS = new Array(10).fill(0).map(function (x) { return generateUser(); });
console.log('USERS: ', USERS);
function getUserByIndex(index) {
    console.count('getUserByIndex');
    return USERS[index];
}
exports.getUserByIndex = getUserByIndex;
