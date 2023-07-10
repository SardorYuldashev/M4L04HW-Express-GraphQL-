import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js'

export const showComment = async ({ id }) => {
  const post = await db('comments').where({ id }).first();

  if (!post) {
    throw new NotFoundError('Comment not found');
  };

  return post;
};