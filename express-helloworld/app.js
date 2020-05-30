var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
<<<<<<< HEAD
  res.send('Hello Mars!!!!\n in mars there is inteligency life');
=======
  res.send('Hello Mars!!!!\n');
>>>>>>> 03b08094c76cec886b3c8beca3ad433a8b4f76f8
});


app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

