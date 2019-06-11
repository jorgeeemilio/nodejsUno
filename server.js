var express = require('express');
var app = express();

app.get('/coche', function(req, res)
{
    res.send('Coche');
});
app.get('*', function(req, res)
{
    res.send('Nada que objetar...');
});

// Abrimos puerto de escucha del servidor
console.log('Escuchando por 8000...')
app.listen(8000);