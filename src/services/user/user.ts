import { Authenticate } from './typings';

import axios from 'utils/axios';

export const authenticate: Authenticate = (auth) => axios.post('auth/auth', auth);
