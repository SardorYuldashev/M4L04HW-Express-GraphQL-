import db from '../../db/index.js';
import { NotFoundError } from '../../shared/errors/index.js';
import { listStudents } from './../students/list-students.js';

export const studentsInGroup = async (args) => {
  const existing = await db('students_groups').where(args).select('*');

  const students = await listStudents();

  let newArr = [];

  for (let i = 0; i < existing.length; i++) {
    for (let j = 0; j < students.length; j++) {
      if (students[j].id == existing[i].student_id) {
        newArr.push(students[j]);
      };
    };
  };

  if (!existing) {
    throw new NotFoundError('Not found');
  };

  return newArr;
};