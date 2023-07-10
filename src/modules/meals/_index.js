import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listMeals } from './list-meals.js';
import { showCategory } from './../categories/show-category.js';
import { showMeal } from './show-meal.js';
import { addMeal } from './add-meal.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'meals', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    meals: () => {
      return listMeals();
    },
    meal: (_, args) => {
      return showMeal({ id: args.id });
    }
  },
  Mutation: {
    createMeal: (_, args) => {
      const result = addMeal(args.input);

      pubsub.publish('MEAL_CREATED', { mealCreated: result });

      return result;
    },
  },
  Subscription: {
    mealCreated: {
      subscribe: () => pubsub.asyncIterator(['MEAL_CREATED'])
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