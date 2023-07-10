import db from '../../db/index.js';

export const addUser = async (payload) => {
  const result = await db('users').insert(payload).returning('*');
  
  return result[0];
};