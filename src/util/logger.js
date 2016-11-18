import bunyan from 'bunyan';

var logger = bunyan.createLogger({
  name: 'questWebApi',
  streams: [
    {
      level: 'error',
      stream: process.stdout
    }, {
      level: 'error',
      path: './logs/questWebApi-error.log'
    }
  ]
});

export default logger;
