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



// Dirección de visualización de productos de Alquiler de Vehículos
app.get('/', (req, res) => {

    var canciones = db.collection('canciones').find();

    //Filtro por precio
    if (req.query.min && req.query.max)
        canciones.filter({
            precio: {
                $gte: parseInt(req.query.min),
                $lte: parseInt(req.query.max)

            }
        });

    canciones.toArray((err, result) => {

        res.render('index', {
            canciones: result
        });
    })
});


app.get('/productos/:id', (req, res) => {


    var prod = db.collection('canciones')
        .find({
            _id: new ObjectID(req.params.id)
        })
        .toArray((err, result) => {
            // console.log(result[0]);
            res.render('productos', {
                cancion: result[0]

            });
        });
});

// Dirección de visualización de checkout
app.get('/check', (req, res) => {
    res.render('checkout');
});


//Carrito
app.get('/productosPorIds', (req, res) => {
    var arreglo = req.query.id.split(',');
    arreglo = arreglo.map(function (id) {
        return new ObjectID(id);
    });
    var canciones = db.collection('canciones').find({
            _id: {
                $in: arreglo
            }
        })
        .toArray((err, result) => {
            res.send(result);
        });
});