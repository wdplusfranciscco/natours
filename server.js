const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const logTimestamp = require('./dev-utilities/log-timestamp');

// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logTimestamp();
  console.log(`App running on port ${port}...`);
});

// console.log(app.get('env'));
