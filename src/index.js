import http from 'http';
import express from 'express';
import cors from 'cors';
import { buildGraphQLServer } from './graphql/index.js';
import { expressMiddleware } from '@apollo/server/express4';
import config from './shared/config/index.js';
import jwt from 'jsonwebtoken';

const app = express();
const httpServer = http.createServer(app);

app.use(express.json());
app.use(cors());

const server = buildGraphQLServer(httpServer);

await server.start();
app.use(
  '/gql',
  expressMiddleware(server, {
    context: ({ req }) => {
      const token = req.headers.authorization;

      if (token) {
        const decoded = jwt.verify(token, config.jwt.secret);

        return { user: decoded.user };
      };

      return { user: {} };
    }
  })
);

const PORT = config.PORT || 8080;
httpServer.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});