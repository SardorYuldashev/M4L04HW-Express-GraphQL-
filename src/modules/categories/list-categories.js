import db from '../../db/index.js';

export const listCategories = ({ filter = {} } = {}) => {
  return db('categories').where(filter).select('*');
};