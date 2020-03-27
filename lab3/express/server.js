const express = require("express");
const app = express();

const PORT = 3000;

app.get('/user/first', (req, res) => {
    res.send(`first on user`);
});

app.get('/user/second', (req, res) => {
    res.send(`second on user`);
});

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
