import express from 'express';

export default function setup(app) {
  app.get('/api/version', (req, res) => {
    res.status(200);
    res.json({version: "1.0"});
  })
};
