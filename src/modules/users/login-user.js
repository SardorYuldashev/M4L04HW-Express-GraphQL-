import db from '../../db/index.js';
import { UnauthorizedError } from '../../shared/errors/index.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../shared/config/index.js';

export const loginUser = async ({ username, password }) => {
  const existing = await db('users').where({ username }).first();

  if (!existing) {
    throw new UnauthorizedError('Incorrect login or password');
  };

  const match = await bcryptjs.compare(password, existing.password);

  if (!match) {
    throw new UnauthorizedError('Incorrect login or password');
  };

  const payload = { user: { id: existing.id } };
  const token = jwt.sign(payload, config.jwt.secret, { expiresIn: '1d' });

  return { token };
};