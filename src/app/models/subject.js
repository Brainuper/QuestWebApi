import Sequelize from 'sequelize';
import sequelize from 'db';

var Subject = sequelize.define('subject', {
  text: {
    type: Sequelize.STRING
  }
});

export default Subject;
