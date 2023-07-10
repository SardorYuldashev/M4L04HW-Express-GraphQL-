import db from '../../db/index.js';

export const listStudents = (filter = {}) => {
  return db('students').where(filter).select('*');
};