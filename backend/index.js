const express = require('express');
const app = express();
const port = process.env.REACT_APP_BACKEND_URL;

app.get('/', (req, res) => {
  res.send('Hello World from Backend! coucou!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
