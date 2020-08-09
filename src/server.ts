import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import typeDefs from './schema';
import resolvers from './resolver';

console.log(resolvers);

const server = new ApolloServer({
  debug: true,
  playground: true,
  tracing: true,
  resolvers,
  typeDefs,
  formatError: (error) => {
    console.error('GQL error message: ', error.message);
    console.error('GQL error path: ', error.path);
    console.error('GQL error: ', error.extensions);
    return error;
  },
});

const app = new Koa();

app.use(server.getMiddleware());

const port = 8080;
app.listen(port, () => {
  console.log('server listening at port %s', port);
});

export default server;
