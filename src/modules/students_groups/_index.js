import { readFileSync } from 'fs';
import { join } from 'path';
import { addStudentGroup } from './add-student-group.js';
import { editStudentOrGroup } from './edit-student-or-group.js';
import { deleteStudentfromGroup } from './remove-student-from-group.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'students_groups', '_schema.gql'), 'utf8');

const resolvers = {
  Mutation: {
    addStudentToGroup: (_, args) => {
      return addStudentGroup(args.input);
    },
    updateStudentOrGroup: (_, args) => {
      return editStudentOrGroup({ id: args.id, ...args.input });
    },
    removeStudentfromGroup: (_, args) => {
      return deleteStudentfromGroup({ id: args.id });
    }
  }
};

export default {
  typeDefs,
  resolvers
};