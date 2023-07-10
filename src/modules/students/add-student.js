import db from '../../db/index.js';

export const addStudent = async (payload) => {
  const result = await db('students').insert(payload).returning('*');

  return result[0];
};