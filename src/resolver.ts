import { resolverArg } from './interfaces';

const userQueryResolver = (_: any, args: resolverArg) => {
  return args.id;
};

const allUsersQueryResolver = () => {
  return new Array(10).fill(0).map((_, index) => index);
};

const UserTypeResolver = {
  age: async (id: number, _: any, ctx: any) => {
    const user = await ctx.loaders.getUserByIndex.load(id);
    return user.age;
  },
  email: async (id: number, _: any, ctx: any) => {
    const user = await ctx.loaders.getUserByIndex.load(id);
    return user.email;
  },
  hobbies: async (id: number, _: any, ctx: any) => {
    const user = await ctx.loaders.getUserByIndex.load(id);
    return user.hobbies;
  },
  id: async (id: number, _: any, ctx: any) => {
    const user = await ctx.loaders.getUserByIndex.load(id);
    return user.id;
  },
  name: async (id: number, _: any, ctx: any) => {
    const user = await ctx.loaders.getUserByIndex.load(id);
    return user.name;
  },
};

export default {
  Query: { user: userQueryResolver, allUsers: allUsersQueryResolver },
  User: UserTypeResolver,
};
