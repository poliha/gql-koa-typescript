import { getUserByIndex } from './datastore';
import { resolverArg } from './interfaces';

const userQuery = (_: any, args: resolverArg) => {
  return args.id;
};

const UserResolver = {
  age: (id: number) => {
    const user = getUserByIndex(id);
    return user.age;
  },
  email: (id: number) => {
    const user = getUserByIndex(id);
    return user.email;
  },
  hobbies: (id: number) => {
    const user = getUserByIndex(id);
    return user.hobbies;
  },
  id: (id: number) => {
    const user = getUserByIndex(id);
    return user.id;
  },
  name: (id: number) => {
    const user = getUserByIndex(id);
    return user.name;
  },
};

export default { Query: { user: userQuery }, User: UserResolver };
