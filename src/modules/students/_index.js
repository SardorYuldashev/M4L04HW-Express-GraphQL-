import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listStudents } from './list-students.js';
import { showStudent } from './show-student.js';
import { addStudent } from './add-student.js';
import { editStudents } from './edit-student.js';
import { removeStudent } from './remove-student.js';
import { studentInGroups } from './student-in-groups.js';
import { listGroups } from './../groups/list-groups.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'students', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    students: () => {
      return listStudents();
    },
    student: (_, args) => {
      return showStudent({ id: args.id });
    }
  },
  Mutation: {
    createStudent: (_, args) => {
      const result = addStudent(args.input);

      pubsub.publish('STUDENT_CREATED', { studentCreated: result });

      return result;
    },
    updateStudent: (_, args) => {
      return editStudents({ id: args.id, ...args.input });
    },
    removeStudent: (_, args) => {
      return removeStudent({ id: args.id });
    }
  },
  Subscription: {
    studentCreated: {
      subscribe: () => pubsub.asyncIterator(['STUDENT_CREATED'])
    }
  },
  Student: {
    full_name: async (parent) => {
      const student = await showStudent({ id: parent.id });

      return `${student.first_name} ${student.last_name}`
    },
    groups: async (parent) => {
      return await studentInGroups({ student_id: parent.id });
    }
  },
};

export default {
  typeDefs,
  resolvers
};