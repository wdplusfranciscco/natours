const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');
const logTimeStamp = require('./dev-utilities/log-time-stamp');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  // CONNECT TO LOCAL DATABASE WITH THIS:
  //     .connect(process.env.DATABASE_LOCAL, {
  // CONNECT TO REMOTE ATLAS DATABASE WITH THIS:
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => logTimeStamp('server.js', 'DB Connection Successful!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logTimeStamp('server.js', `App running on port ${port}...`);
});

// console.log(app.get('env'));
