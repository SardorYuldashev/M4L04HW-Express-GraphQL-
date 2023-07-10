import db from '../../db/index.js';

export const editMeal = async ({ id, ...changes }) => {
  const meal = await db('meals').where({ id }).first();

  if (!meal) {
    throw new NotFoundError('Meal not found');
  }

  return (await db('meals').where({ id }).update(changes).returning('*'))[0];
};