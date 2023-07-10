import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const editComment = async ({ id, ...changes }) => {
  const comment = await db('comments').where({ id }).first();

  if (!comment) {
    throw new NotFoundError(`Comment not found`);
  };

  return (await db('comments').where({ id }).update(changes).returning('*'))[0];
};