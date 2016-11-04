import Sequelize from 'sequelize';
import sequelize from 'db';

var Quest = sequelize.define('quest', {
  text: {
    type: Sequelize.TEXT
  },
  option: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  answer: {
    type: Sequelize.INTEGER
  }
});

export default Quest;
