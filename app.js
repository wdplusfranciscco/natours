const express = require('express');
const morgan = require('morgan');
const logDebugStamp = require('./dev-utilities/log-debug-stamp');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json()); // Middleware to add data from the body to the request object
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  logDebugStamp(
    '20.09.16 [ app.js ] 16:51a',
    'Hello from the middleware!! 👋 '
  );
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
