const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');
const logTimestamp = require('./dev-utilities/log-timestamp');

// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logTimestamp();
  console.log(`App running on port ${port}...`);
});

// console.log(app.get('env'));
