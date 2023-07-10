import db from '../../db/index.js';

export const listGroups = (filter = {}) => {
  return db('groups').where(filter).select('*');
};