const repo = require('./dao/skuRepo')

getSkuDetailsByProduct = (request, response) => {
    const pid = parseInt(request.params.pid)
    repo.getSkuDetailsByProduct(pid).then(result => response.send(result)).catch(err => console.log(err))
}

getProductBySize = (request, response) => {
    const pid = parseInt(request.query.pid)
    const size = parseInt(request.query.size)
    repo.getProductBySize(pid, size).then(result => response.send(result)).catch(err => console.log(err))
}

getProductByColour = (request, response) => {
    const pid = parseInt(request.query.pid)
    const colour = parseInt(request.query.colour)
    repo.getProductByColour(pid, colour).then(result => response.send(result)).catch(err => console.log(err))
}

getProductByColourAndSize = (request, response) => {
    const pid = parseInt(request.query.pid)
    const size = parseInt(request.query.size)
    const colour = parseInt(request.query.colour)
    repo.getProductByColourAndSize(pid, size, colour).then(result => response.send(result)).catch(err => console.log(err))
}


module.exports = {
    getSkuDetailsByProduct,
    getProductBySize,
    getProductByColour,
    getProductByColourAndSize
}