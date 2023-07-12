import db from '../../db/index.js';
import bcryptjs from 'bcryptjs';

export const addUser = async (payload) => {
  const hashedPassword = await bcryptjs.hash(payload.password, 10);

  const result = await db('users')
    .insert({ ...payload, password: hashedPassword })
    .returning('*');

  return result[0];
};