import { makeExecutableSchema } from '@graphql-tools/schema';
import usersModule from '../modules/users/_index.js';
import postsModule from '../modules/posts/_index.js';
import commentsModule from '../modules/comments/_index.js';

export const schema = makeExecutableSchema({
  typeDefs: [usersModule.typeDefs, postsModule.typeDefs, commentsModule.typeDefs],
  resolvers: [usersModule.resolvers, postsModule.resolvers, commentsModule.resolvers],
});