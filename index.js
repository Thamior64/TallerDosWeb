const MongoClient = require('mongodb').MongoClient,
    ObjectID = require('mongodb').ObjectID,
    express = require('express'),
    engines = require('consolidate');

var app = express(),
    db;

app.engine('hbs', engines.handlebars);

app.set('views', './views');
app.set('view engine', 'hbs');

app.use(express.static('public'));


// Conectarse a Base de Datos
MongoClient.connect('mongodb://localhost:27017', function (err, client) {
    if (err) throw err;

    db = client.db('cdshop');

    // Iniciar servidor
    app.listen(1234);
});



app.get('/', (req, res) => {

    var canciones = db.collection('canciones').find();

    canciones.toArray((err, result) => {

        res.render('index', {
            canciones: result
        });
    })
});