const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat')

let newTemp = new Thermostat;

app.get('/temperature', (req, res) => {
  // const thermostat = new Thermostat;
  // const temp = thermostat.getTemperature();
  const string = JSON.stringify(newTemp.temp);
  res.send(string);
});

app.post('/up', (req, res) => {
  newTemp.up();
  res.send(`You've turned the thermostat up by 1 degree`);
});

app.post('/down', (req, res) => {
  newTemp.down();
  res.send(`You've turned the thermostat down by 1 degree`);
});

app.delete('/temperature', (req, res) => {
  newTemp.reset();
  res.send(`You've reset the thermostat to 20 degrees`);
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);