import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listCategories } from './list-categories.js';
import { showCategory } from './show-category.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'categories', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    categories: () => {
      return listCategories();
    },
    category: (_, args) => {
      return showCategory({ id: args.id });
    }
  }
};

export default {
  typeDefs,
  resolvers
}
