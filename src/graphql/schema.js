import { makeExecutableSchema } from '@graphql-tools/schema';

// Task 1 uchun
import categoriesModule from '../modules/categories/_index.js';
import mealsModule from '../modules/meals/_index.js';
const typdefsArr = [categoriesModule.typeDefs, mealsModule.typeDefs];
const resolversArr = [categoriesModule.resolvers, mealsModule.resolvers];

// Task 2 uchun
// import usersModule from '../modules/users/_index.js';
// import postsModule from '../modules/posts/_index.js';
// import commentsModule from '../modules/comments/_index.js';
// const typdefsArr = [usersModule.typeDefs, postsModule.typeDefs, commentsModule.typeDefs];
// const resolversArr = [usersModule.resolvers, postsModule.resolvers, commentsModule.resolvers];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});