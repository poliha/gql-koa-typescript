"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_koa_1 = require("apollo-server-koa");
var userSchema = apollo_server_koa_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    user(id: Int!): User\n    allUsers: [User]\n  }\n\n  type User {\n    age: Int!\n    email: String!\n    hobbies: [String!]\n    id: Int!\n    name: String!\n  }\n"], ["\n  type Query {\n    user(id: Int!): User\n    allUsers: [User]\n  }\n\n  type User {\n    age: Int!\n    email: String!\n    hobbies: [String!]\n    id: Int!\n    name: String!\n  }\n"])));
exports.default = userSchema;
var templateObject_1;
