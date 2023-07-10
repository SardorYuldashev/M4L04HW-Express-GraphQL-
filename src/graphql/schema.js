import { makeExecutableSchema } from '@graphql-tools/schema';
import usersModule from '../modules/users/index.js';
import postsModule from '../modules/posts/index.js';

export const schema = makeExecutableSchema({
  typeDefs: [usersModule.typeDefs, postsModule.typeDefs],
  resolvers: [usersModule.resolvers, postsModule.resolvers],
});