const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const csvToJson = (csv) => {
  const rowsString = csv.split(/\r?\n/);
  const rowsArray = rowsString.map((row) => row.split(','));

  const header = rowsArray[0];
  const body = rowsArray.slice(1);

  const json = body.map((row) => {
    return header.reduce((acc, item, index) => {
      return { ...acc, [item.toLowerCase()]: row[index] };
    }, {});
  });

  return json;
};

const filterData = (filters, data) => {
  if (!filters) return data;
  if (!Object.keys(filters).length) return data;

  const age = filters.age;
  const gender = filters.gender;
  const height = filters.height;
  const weight = filters.weight;

  return data.filter((row) => {
    const conditions = [
      age ? row.age === age : true,
      weight ? row.weight === weight : true,
      gender ? row.gender === gender : true,
      height ? row.height === height : true,
    ];

    const notMeetCondition = conditions.some((item) => !item);
    return !notMeetCondition;
  });
};

/**
 * height
 * weight
 * age
 * gender
 */
app.get('/obesity', async (req, res) => {
  const currentPath = path.join('data', 'obesity.csv');
  simpleRead(req, res, currentPath);
  //streamRead(req, res, currentPath);
});

const simpleRead = (req, res, currentPath) => {
  const csv = fs.readFileSync(currentPath).toString('utf-8');
  const jsonData = csvToJson(csv);
  const data = filterData(req.query, jsonData);
  res.status(200).json({
    data,
  });
};

const pipe = async (req, currentPath) => {
  return new Promise((res, rej) => {
    fs.createReadStream(currentPath, 'utf-8').on('data', (csv) => {
      const jsonData = csvToJson(csv);
      const data = filterData(req.query, jsonData);
      res({
        data,
      });
    });
  });
};

const streamRead = async (req, res, currentPath) => {
  const data = await pipe(req, currentPath);
  res.status(200).json({
    data,
  });
};

app.listen(3000, () => {
  console.log('Server up in port 3000');
});
