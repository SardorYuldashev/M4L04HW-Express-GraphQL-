import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showStudentsInGroup = async ({ id }) => {
  const existing = await db('students_groups').where({ id }).first();

  if (!existing) {
    throw new NotFoundError('Student in group not found');
  };

  return existing;
};