import { List } from './list.model';
import { User } from './user.model';

const faker = require('faker');

for (let i = 0; i < 10; i++) {
  User.create({
    name: faker.name,
    email: faker.internet.email,
    password: faker.internet.password
  });
}
