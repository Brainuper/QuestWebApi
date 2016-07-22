import app from './app/app';

var port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});
