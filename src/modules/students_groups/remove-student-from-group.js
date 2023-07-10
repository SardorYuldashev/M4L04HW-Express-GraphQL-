import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const deleteStudentfromGroup = async ({ id }) => {
  const existing = await db('students_groups').where({ id }).first();

  if (!existing) {
    throw new NotFoundError('Student or group not found');
  };

  await db('students_groups').where({ id }).delete().returning('*');

  return "Student removed from group"
};