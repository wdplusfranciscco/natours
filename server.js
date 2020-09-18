const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
const logTimeStamp = require('./dev-utilities/log-time-stamp');

dotenv.config({ path: './config.env' });

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

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  logTimeStamp('server.js', `App running on port ${port}...`);
});

// console.log(app.get('env'));
