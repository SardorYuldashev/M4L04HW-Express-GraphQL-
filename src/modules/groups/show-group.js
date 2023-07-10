import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const showGroup = async ({ id }) => {
  const group = await db('groups').where({ id }).first();

  if (!group) {
    throw new NotFoundError('Group not found');
  };

  return group;
};