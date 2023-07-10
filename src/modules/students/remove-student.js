import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeStudent = async ({ id }) => {
  const student = await db('students').where({ id }).first();

  if (!student) {
    throw new NotFoundError('Student not found');
  };

  return (await db('students').where({ id }).delete().returning('*'))[0];
};