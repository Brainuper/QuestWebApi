import express from 'express';
import bodyParser from 'body-parser';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

export default app;
