import { makeExecutableSchema } from '@graphql-tools/schema';
import usersModule from '../modules/users/_index.js';
import postsModule from '../modules/posts/_index.js';
import commentsModule from '../modules/comments/_index.js';

const typdefsArr = [usersModule.typeDefs, postsModule.typeDefs, commentsModule.typeDefs];
const resolversArr = [usersModule.resolvers, postsModule.resolvers, commentsModule.resolvers];

export const schema = makeExecutableSchema({
  typeDefs: typdefsArr,
  resolvers: resolversArr,
});
