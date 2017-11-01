const express = require('express');
const app = express();

app.get('/cal/:eval', (req, res) => {
  console.log(req.params);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(eval(req.params.eval));
});

app.listen(3000, () => {
  console.log('Cal page');
});