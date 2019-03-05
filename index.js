const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const server = require('./product')
const items = require('./items')
const sku = require('./dao/skuRepo')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/products', server.getProducts);
app.get('/products/:id', server.getProductById)
app.post('/products', server.createProduct)
app.put('/products/:id', server.updateProduct)
app.delete('/products/:id', server.deleteProduct)

app.get('/items', items.getItems);
app.put('/items', items.updateInventory);


app.listen(3000)