import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';
import { listGroups } from '../groups/list-groups.js';

export const studentInGroups = async (args) => {
  const existing = await db('students_groups').where(args).select('*');

  const groups = await listGroups();

  let newArr = [];

  for (let i = 0; i < existing.length; i++) {
    for (let j = 0; j < groups.length; j++) {
      if (groups[j].id == existing[i].group_id) {
        newArr.push(groups[j]);
      };
    };
  };

  if (!existing) {
    throw new NotFoundError('Not found');
  };

  return newArr;
};