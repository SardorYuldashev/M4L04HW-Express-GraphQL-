import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listGroups } from './list-groups.js';
import { showGroup } from './show-group.js';
import { addGroup } from './add-group.js';
import { editGroup } from './edit-group.js';
import { removeGroup } from './remove-group.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'groups', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    groups: () => {
      return listGroups();
    },
    group: (_, args) => {
      return showGroup({ id: args.id });
    }
  },
  Mutation: {
    createGroup: (_, args) => {
      const result = addGroup(args.input);

      pubsub.publish('GROUP_CREATED', { groupCreated: result });

      return result;
    },
    updateGroup: (_, args) => {
      return editGroup({ id: args.id, ...args.input });
    },
    removeGroup: (_, args) => {
      return removeGroup({ id: args.id });
    }
  },
  Subscription: {
    groupCreated: {
      subscribe: () => pubsub.asyncIterator(['GROUP_CREATED'])
    }
  },
};

export default {
  typeDefs,
  resolvers
};