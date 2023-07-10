import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listCategories } from './list-categories.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'categories', '_schema.gql'), 'utf8');

const resolvers ={
  Query: {
    categories: () => {
      return listCategories();
    }
  }
};

export default {
  typeDefs,
  resolvers
}
