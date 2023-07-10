import db from '../../db/index.js';

export const addMeal = async (payload) => {
  const result = await db('meals').insert(payload).returning('*');
  
  return result[0];
};