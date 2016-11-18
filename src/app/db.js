import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

let database = process.env.MONGO_DB || 'QuestStorage';
let host = process.env.MONGO_PORT_27017_TCP_ADDR || '192.168.99.100';

const mongodb = mongoose.connect(`mongodb://${host}/${database}`);

export default mongodb;
