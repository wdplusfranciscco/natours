const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json()); // Middleware to add data from the body to the request object

// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .json({ message: 'Hello from the server side!', app: 'Natours' });
// });

// app.post('/', (req, res) => {
//   res.end('You can post to this endpoint...');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours, // short form for tours: tours. This can be used in ES6 when the key and the value share the same identifier, in this case: tours
    },
  });
});

app.post('/api/v1/tours', (req, res) => {
  console.log(req.body);
  res.send('Done');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
