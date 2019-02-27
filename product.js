const repo = require('./dao/productRepo')

getProducts = (req, res) => {
  repo.getProducts().then(result => res.send(result)).catch(err => console.log(err));
}

getProductById = (request, response) => {
  const id = parseInt(request.params.id)
  repo.getProductById(id).then(result => response.send(result)).catch(err => console.log(err))
}

createProduct = (request, response) => {
  const { product_name } = request.body
  repo.createProduct(product_name).then(response.send('Product added')).catch(err => console.log(err))
}

updateProduct = (request, response) => {
  const id = parseInt(request.params.id)
  const { product_name } = request.body
  repo.updateProduct(id, product_name).then(response.send('Product updated')).catch(err => console.log(err))
}

deleteProduct = (request, response) => {
  const id = parseInt(request.params.id)
  repo.deleteProduct(id).then(response.send('Product deleted')).catch(err => console.log(err))
}

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
}