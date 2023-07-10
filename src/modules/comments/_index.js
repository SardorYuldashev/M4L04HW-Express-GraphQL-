import { readFileSync } from 'fs';
import { join } from 'path';
import { pubsub } from '../../graphql/pubsub.js';
import { listComments } from './list-comments.js';
import { showComment } from './show-comment.js';
import { addComment } from './add-comment.js';
import { showUser } from '../users/show-user.js';
import { showPost } from '../posts/show-post.js';
import { editComment } from './edit-comment.js';
import { removeComment } from './remove-comment.js';

const typeDefs = readFileSync(join(process.cwd(), 'src', 'modules', 'comments', '_schema.gql'), 'utf8');

const resolvers = {
  Query: {
    comments: () => {
      return listComments();
    },
    comment: (_, args) => {
      return showComment({ id: args.id });
    }
  },
  Mutation: {
    createComment: (_, args) => {
      const result = addComment(args.input);

      pubsub.publish('COMMENT_CREATED', { commentCreated: result });

      return result;
    },
    updateComment: (_, args) => {
      return editComment({ id: args.id, ...args.input });
    },
    removeComment: (_, args) => {
      return removeComment({ id: args.id });
    }
  },
  Subscription: {
    commentCreated: {
      subscribe: () => pubsub.asyncIterator(['COMMENT_CREATED'])
    }
  },
  Comment: {
    user: (parent) => {
      return showUser({ id: parent.user_id });
    },
    post: (parent) => {
      return showPost({ id: parent.post_id });
    },
  },
};

export default {
  typeDefs,
  resolvers
}