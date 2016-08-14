import Sequelize from 'sequelize';
import config from '../config/config.json';

var env = process.env.NODE_ENV || 'development';
var db = config[env];
var sequelize = new Sequelize(db.database, db.username, db.password, {
  host: db.host,
  dialect: db.dialect,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
})

export default sequelize;
