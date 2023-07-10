import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listStudents } from './list-students.js';
import { showStudent } from './show-student.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'students', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    students: () => {
      return listStudents();
    },
    student: (_, args) => {
      return showStudent({ id: args.id });
    }
  }
};

export default {
  typeDefs,
  resolvers
};