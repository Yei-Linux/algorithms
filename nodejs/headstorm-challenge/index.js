const express = require('express');

const app = express();

let dataStore = [];

app.use(express.json());

app.post('/data', (req, res) => {
  const body = req.body;

  try {
    if (!body) {
      throw new Error('Body is required');
    }

    if (typeof body !== 'object') {
      throw new Error('Should be a list');
    }

    if (!Array.isArray(body)) {
      throw new Error('Should be a list');
    }

    if (body.length !== 5) {
      throw new Error('The list has to have 500 items in the list');
    }

    dataStore = body;

    res.status(201).json({
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error: ' + error.message,
    });
  }
});

app.get('/data', (req, res) => {
  const sortedList = dataStore.sort((a, b) => a - b);

  res.status(200).json({
    data: sortedList,
  });
});

app.patch('/data', (req, res) => {
  const order = req.body.order;
  const value = req.body.value;

  try {
    if (order >= dataStore.length) {
      throw new Error('Order Position is not available');
    }

    dataStore[order] = value;

    res.status(200).json({ data: dataStore });
  } catch (error) {
    res.status(500).json({
      message: 'Index out of range',
    });
  }
});

app.listen(3000, () => {
  console.log('Server up in port 3000');
});
