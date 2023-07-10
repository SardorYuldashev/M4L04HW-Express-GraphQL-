import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const editStudents = async ({ id, ...changes }) => {
  const student = await db('students').where({ id }).first();

  if (!student) {
    throw new NotFoundError('Student not found');
  };

  return (await db('students').where({ id }).update(changes).returning('*'))[0];
};