const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri =
  'mongodb+srv://Prom:Qz9AoOdGAmwY1LLd@cluster0.23cvizh.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const app = express();
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

// productRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /products.
const productRoutes = express.Router();
app.use('/products', productRoutes);

client.connect((connErr) => {
  if (connErr) {
    client.close();
    throw connErr;
  }

  console.log('Db connected.');

  const collection = client.db('products').collection('products');

  // This help convert the id from string to ObjectId for the _id.
  const ObjectId = require('mongodb').ObjectId;

  // This section will help you get a list of all the products.
  productRoutes.route('/').get((req, res) => {
    collection.find({}).toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // This section will help you get a single product by id.
  productRoutes.route('/:id').get((req, res) => {
    let myQuery = { _id: ObjectId(req.params.id) };
    collection.findOne(myQuery, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // This section will help you create a new product.
  productRoutes.route('/add').post((req, response) => {
    collection.insertOne(req.body, (err, res) => {
      if (err) throw err;
      response.json(res);
    });
  });

  // This section will help you update a product by id.
  productRoutes.route('/update/:id').post((req, response) => {
    let myQuery = { _id: ObjectId(req.params.id) };
    let newValues = {
      $set: req.body,
    };
    collection.updateOne(myQuery, newValues, (err, res) => {
      if (err) throw err;
      response.json(res);
    });
  });

  // This section will help you delete a product
  productRoutes.route('/remove/:id').post((req, response) => {
    let myQuery = { _id: ObjectId(req.params.id) };
    collection.deleteOne(myQuery, (err, obj) => {
      if (err) throw err;
      response.json(obj);
    });
  });
});

app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT);
});
