"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_koa_1 = require("apollo-server-koa");
var koa_1 = __importDefault(require("koa"));
var schema_1 = __importDefault(require("./schema"));
var resolver_1 = __importDefault(require("./resolver"));
console.log(resolver_1.default);
var server = new apollo_server_koa_1.ApolloServer({
    debug: true,
    playground: true,
    tracing: true,
    resolvers: resolver_1.default,
    typeDefs: schema_1.default,
    formatError: function (error) {
        console.error('GQL error message: ', error.message);
        console.error('GQL error path: ', error.path);
        console.error('GQL error: ', error.extensions);
        return error;
    },
});
var app = new koa_1.default();
app.use(server.getMiddleware());
var port = 8080;
app.listen(port, function () {
    console.log('server listening at port %s', port);
});
exports.default = server;
