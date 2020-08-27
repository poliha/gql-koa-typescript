import { ApolloServer } from 'apollo-server-koa';
import Koa from 'koa';
import typeDefs from './schema';
import resolvers from './resolver';
import context from './context';

const server = new ApolloServer({
  debug: true,
  playground: true,
  tracing: true,
  resolvers,
  typeDefs,
  context,
});

const app = new Koa();

app.use(server.getMiddleware());

const port = 8080;
app.listen(port, () => {
  console.log('server listening at port %s', port);
});

export default server;
