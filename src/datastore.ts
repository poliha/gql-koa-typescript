import casual from 'casual';
import { User } from './interfaces';
const hobbies = [
  'soccer',
  'travelling',
  'dancing',
  'painting',
  'sailing',
  'fishing',
  'movies',
  'coding',
];

function generateUser(): User {
  return {
    age: casual.integer(20, 30),
    email: casual.email,
    hobbies: [casual.random_element(hobbies)],
    id: casual.integer(1, 10),
    name: casual.name,
  };
}

const USERS = new Array(10).fill(0).map((x) => generateUser());

console.log('USERS: ', USERS);

function getUserByIndex(index: number): User {
  console.count('getUserByIndex');
  return USERS[index];
}

export { getUserByIndex };
