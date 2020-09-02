const express = require('express');
const morgan = require('morgan');
const logTimestamp = require('./dev-utilities/log-timestamp');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
app.use(morgan('dev'));

app.use(express.json()); // Middleware to add data from the body to the request object

app.use((req, res, next) => {
  console.log('Hello from the middleware!! 👋 ');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) ROUTES

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 3) START SERVER

const port = 3000;
app.listen(port, () => {
  logTimestamp();
  console.log(`App running on port ${port}...`);
});
