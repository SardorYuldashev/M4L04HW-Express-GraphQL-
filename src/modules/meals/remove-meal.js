import db from '../../db/index.js';

export const removeMeal = async ({ id }) => {
  const meal = await db('meals').where({ id }).first();

  if (!meal) {
    throw new NotFoundError('Meal not found');
  }

  return (await db('meals').where({ id }).delete().returning('*'))[0];
};