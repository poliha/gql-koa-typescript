"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var datastore_1 = require("./datastore");
var userQuery = function (_, args) {
    return args.id;
};
var UserResolver = {
    age: function (id) {
        var user = datastore_1.getUserByIndex(id);
        return user.age;
    },
    email: function (id) {
        var user = datastore_1.getUserByIndex(id);
        return user.email;
    },
    hobbies: function (id) {
        var user = datastore_1.getUserByIndex(id);
        return user.hobbies;
    },
    id: function (id) {
        var user = datastore_1.getUserByIndex(id);
        return user.id;
    },
    name: function (id) {
        var user = datastore_1.getUserByIndex(id);
        return user.name;
    },
};
exports.default = { Query: { user: userQuery }, User: UserResolver };
