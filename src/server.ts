import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import typeDefs from './schema';
import resolvers from './resolver';

const server = new ApolloServer({
  debug: true,
  playground: true,
  tracing: true,
  resolvers,
  typeDefs,
});

const app = new Koa();

app.use(server.getMiddleware());

const port = 8080;
app.listen(port, () => {
  console.log('server listening at port %s', port);
});

export default server;
