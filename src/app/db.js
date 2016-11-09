import mongoose from 'mongoose';
import config from 'config.json';

mongoose.Promise = global.Promise;

let env = process.env.NODE_ENV || 'development';
let { host, database} = config[env];
const mongodb = mongoose.connect(`mongodb://${host}/${database}`);

export default mongodb;
