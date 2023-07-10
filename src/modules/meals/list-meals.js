import db from '../../db/index.js';

export const listMeals = (filter = {}) => {
  return db('meals').where(filter).select('*');
};