const pool = require('../connection').pool

function getItemsByPid(pid) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM product, sku WHERE product.pid = $1', [pid], (err, result) => {
            if(err)
                reject(err)
            else
                resolve(result.rows)
        })
    })
}

function getItemByColour(pid, colour) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM product, sku WHERE product.pid = $1 AND sku.colour = $2', [pid, colour], (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result.rows);
        })
    })
}

function getItemBySize(pid, size) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM product, sku WHERE product.pid = $1 AND sku.size = $2', [pid, size], (error, results) => {
            if (error)
                reject(error)
            else
                resolve(results.rows)
        })
    })
}


function getItemByColourAndSize(pid, size, colour) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM product, sku WHERE product.pid = $1 AND sku.colour = $2 AND sku.size = $3', [pid, colour, size], (error, results) => {
            if (error)
                reject(error)
            else
                resolve(results.rows)
        })
    })
}


module.exports = {
    getItemsByPid,
    getItemByColour,
    getItemBySize,
    getItemByColourAndSize
}