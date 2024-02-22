import 'whatwg-fetch';
import 'setimmediate';
import { getEnvironments } from './src/helpers';

required('dotenv').config({
    path: 'env.test',
})

jest.mock('./src/helpers', () => ({
    getEnvironments: () => ({ ...process.env }),
}))