import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const removeComment = async ({ id }) => {
  const comment = await db('comments').where({ id }).first();

  if (!comment) {
    throw new NotFoundError('Comment not found');
  };

  return (await db('comments').where({ id }).delete().returning('*'))[0];
};