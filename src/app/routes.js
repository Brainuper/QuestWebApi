import * as component from './components';
import db from 'db';
import logger from 'logger';

export default function setup(app) {
  app.get('/api/version', (req, res) => {
    res.status(200);
    res.json({version: '1.0'});
  });

  // app.use((req, res, next) => {
  //   db
  //     .sync()
  //     .then(() => {
  //       next();
  //     })
  //     .catch((err) => {
  //       logger.error(err);
  //       res.status(500).json(err.message);
  //     });
  // });

  app.use('/api/subjects', component.subjectRouter());
  app.use('/api/quests', component.questRouter());
}
