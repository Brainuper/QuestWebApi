import * as component from './components';
import 'db';
import logger from 'logger';

export default function setup(app) {
  app.get('/api/version', (req, res) => {
    res.status(200);
    res.json({version: '1.0'});
  });

  app.use('/api/subjects', component.subjectRouter());
  app.use('/api/quests', component.questRouter());
  app.use('/api/random', component.randomRouter());
}
