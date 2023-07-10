import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';

export const editCategory = async ({ id, ...changes }) => {
  const category = await db('categories').where({ id }).first();

  if (!category) {
    throw new NotFoundError('Category not found');
  };

  return (await db('categories').where({ id }).update(changes).returning('*'))[0];
};