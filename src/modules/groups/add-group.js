import db from '../../db/index.js';

export const addGroup = async (payload) => {
  const result = await db('groups').insert(payload).returning('*');

  return result[0];
};