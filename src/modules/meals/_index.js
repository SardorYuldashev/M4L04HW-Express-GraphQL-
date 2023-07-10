import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listMeals } from './list-meals.js';
import { showCategory } from './../categories/show-category.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'meals', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    meals: () => {
      return listMeals();
    }
  },
  Meal: {
    category: (parent) => {
      return showCategory({id: parent.category_id});
    }
  }
};

export default {
  typeDefs,
  resolvers
};