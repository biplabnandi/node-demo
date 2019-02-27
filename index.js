const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const server = require('./product')

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

app.listen(3000)