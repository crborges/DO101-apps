const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {
    response = 'This is version 2 of the app.' + '\n';
    res.send(response);
});



app.get('/index.php', function (req, res) {
    response = 'Só parece que é php mais naum eh' + '\n';
    res.send(response);
});




app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
