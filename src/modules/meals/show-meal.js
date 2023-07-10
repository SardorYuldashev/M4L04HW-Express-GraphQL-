import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showMeal = async ({ id }) => {
  const meal = await db('meals').where({ id }).first();

  if (!meal) {
    throw new NotFoundError('Meal not found');
  };

  return meal;
};