import Sequelize from 'sequelize';
import config from './config';

var db = config.db;

var sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.host,
  port: db.port,
  dialect: db.dialect,

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
})

export default sequelize;
