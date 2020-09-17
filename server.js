const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const logDebugStamp = require('./dev-utilities/log-debug-stamp');
const logTimeStamp = require('./dev-utilities/log-time-stamp');

dotenv.config({ path: './config.env' });

logDebugStamp(
  '20.09.16 [ server.js ] 19:39a',
  `process.env.DATABASE:::   ${process.env.DATABASE}`
);
logDebugStamp(
  '20.09.16 [ server.js ] 19:38b',
  `process.env.DATABASE_PASSWORD:::   ${process.env.DATABASE_PASSWORD}`
);

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

logDebugStamp('20.09.16 [ server.js ] 19:38a', `DB:::   ${DB}`);

mongoose
  // CONNECT TO LOCAL DATABASE WITH THIS:
  .connect(process.env.DATABASE_LOCAL, {
    //   <<< CONNECT TO REMOTE ATLAS DATABASE WITH THIS:
    //.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() =>
    logDebugStamp('20.09.16 [ server.js ] 20:24a', 'DB Connection Successful!')
  );

// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logTimeStamp('server.js', `App running on port ${port}...`);
});

// console.log(app.get('env'));
