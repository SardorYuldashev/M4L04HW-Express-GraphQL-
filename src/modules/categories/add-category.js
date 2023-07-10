import db from '../../db/index.js';

export const addCategory = async (payload) => {
  const result = await db('categories').insert(payload).returning('*');

  return result[0];
};