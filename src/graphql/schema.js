import { makeExecutableSchema } from '@graphql-tools/schema';


export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
