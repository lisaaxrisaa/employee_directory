// TODO: this file :)

const express = require('express');
const app = express();
const employees = require('./employees');

const init = async () => {
  app.listen(3001, () => console.log('I am listening on port 3001'));
};

app.get('/', (req, res) => {
  res.send('Hello employees');
});

app.get('/employees', async (req, res) => {
  res.status(200).json(employees);
});

app.get('/employees/random', async (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.status(200).json(randomEmployee);
});

app.get('/employees/:id', async (req, res) => {
  console.log('am I here');
  const id = Number(req.params.id);
  const filteredArray = employees.filter((element) => element.id === id);

  if (filteredArray.length > 0) {
    res.status(200).json(filteredArray[0]);
  } else {
    res.status(404).send('Employee not found');
  }
});

init();
