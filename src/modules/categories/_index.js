import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listCategories } from './list-categories.js';
import { showCategory } from './show-category.js';
import { addCategory } from './add-category.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'categories', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    categories: () => {
      return listCategories();
    },
    category: (_, args) => {
      return showCategory({ id: args.id });
    }
  },
  Mutation: {
    createCategory: (_, args) => {
      const result = addCategory(args.input);

      pubsub.publish('CATEGORY_CREATED', {categoryCreated: result});

      return result;
    }
  },
  Subscription: {
    categoryCreated: {
      subscribe: () => pubsub.asyncIterator(['CATEGORY_CREATED'])
    }
  }
};

export default {
  typeDefs,
  resolvers
}
