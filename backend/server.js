const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/products', {
  useNewUrlParser: true,
});
const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const productRouter = express.Router();
app.use('/products', productRouter);

const Product = require('./product.model');

productRouter.route('/add').post((req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(400).send('Adding new product failed');
    });
});

productRouter.route('/').get((req, res) => {
  Product.find((err, products) => {
    if (err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
});

productRouter.route('/:id').get((req, res) => {
  let id = req.params.id;
  Product.findById(id, (err, product) => {
    res.json(product);
  });
});

productRouter.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id, (err, product) => {
    if (!product) res.status(404).send('Data is not found');
    else {
      product.name = req.body.name;
      product.info = req.body.info;
    }

    product
      .save()
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        res.status(400).send('Update not possible');
      });
  });
});

productRouter.route('/remove/:id').post((req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((status) => {
      res.json(status);
    })
    .catch((err) => {
      res.status(400).send('Remove not possible');
    });
});

app.listen(PORT, () => {
  console.log('Server is running on Port: ' + PORT);
});
