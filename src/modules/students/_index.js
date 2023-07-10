import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listStudents } from './list-students.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'students', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    students: () => {
      return listStudents();
    }
  }
};

export default {
  typeDefs,
  resolvers
};