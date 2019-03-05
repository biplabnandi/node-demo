const repo = require('./dao/productDetails')
const product = require('./dao/productRepo')
const sku = require('./dao/skuRepo')
const price = require('./price')

getItems = (req, res) => {
    const item = req.query.item
    const colour = req.query.colour
    const size = req.query.size
    const discount = req.query.discount

    if (item === undefined) {
        console.log('Pass item name')
    }

    else if (colour === undefined && size === undefined) {
        let body = ''
        // let body = {}
        product.getProductIdByName(item).then(
            item => repo.getItemsByPid(item[0].pid).then(result => {
                if (discount !== undefined) {
                    if (discount > 70) { res.send('Discount cannot exceed 70%') }
                    else {
                        for (i = 0; i < result.length; i++) {
                           body += price.finalPrice(result[i], discount)
                        //    body = {...body, ...price.finalPrice(result[i], discount)}
                        }
                        res.send(body)
                    }

                }

                else {
                    res.send(result)
                }
            }).catch(err => console.log(err))).catch(err => console.log(err))
    }

    else if (colour === undefined) {
        product.getProductIdByName(item).then(
            item => repo.getItemBySize(item[0].pid, size)
                .then(result => res.send(result))
                .catch(err => console.log(err))).catch(err => console.log(err))
    }

    else if (size == undefined) {
        product.getProductIdByName(item).then(
            item => repo.getItemByColour(item[0].pid, colour)
                .then(result => res.send(result))
                .catch(err => console.log(err))).catch(err => console.log(err))
    }

    else {
        product.getProductIdByName(item).then(
            item => repo.getItemByColourAndSize(item[0].pid, size, colour)
                .then(result => res.send(result))
                .catch(err => console.log(err))).catch(err => console.log(err))
    }
}

updateInventory = (req, res) => {
    const id = req.query.id
    const number = req.query.no
    let stock = 0
    sku.getStockById(id).then(result => stock = result[0].stock-number).catch(err => console.log(err))
    sku.updateInventory(pid, stock).then(response.send('Product updated')).catch(err => console.log(err))
}


module.exports = {
    getItems,
    updateInventory
}