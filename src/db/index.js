import knex from 'knex';
import config from '../shared/config/index.js';

/**
 * @type {knex.Knex}
 */
const db = knex({
  client: 'postgresql',
  connection: {
    host: config.db.host,
    port: config.db.port,
    database: config.db.name,
    user: config.db.user,
    password: config.db.password
  },
  pool: {
    min: 2,
    max: 10
  },
});

/**
 * @type {knex.Knex}
 */
export default db;