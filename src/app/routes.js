import express from 'express';

import * as Controller from './components';

export default function setup(app) {
  app.get('/api/version', (req, res) => {
    res.status(200);
    res.json({version: "1.0"});
  });

  app.use('/api/subjects', Controller.subjectController());
};
