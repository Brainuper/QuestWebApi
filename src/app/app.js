import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//CORS
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

routes(app);

export default app;
