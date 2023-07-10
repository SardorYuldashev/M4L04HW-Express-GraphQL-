import db from '../../db/index.js';

export const addStudentGroup = async (payload) => {
  const result = await db('students_groups').insert(payload).returning('*');

  return "Student added to group";
};