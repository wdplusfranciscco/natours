const app = require('./app');
const logTimestamp = require('./dev-utilities/log-timestamp');

const port = 3000;
app.listen(port, () => {
  logTimestamp();
  console.log(`App running on port ${port}...`);
});
