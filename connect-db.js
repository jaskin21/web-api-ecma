import mongoose from 'mongoose';
import _debug from 'debug';

const debug = _debug('Web API:server');

export default async (connection, dbname) => {
  try {
    debug('database connection established', connection, dbname);
    console.log('connection complete');
    await mongoose.connect(connection, { dbname });
  } catch (error) {
    console.log(error);
    debug('connection error!!', error);
  }
};
