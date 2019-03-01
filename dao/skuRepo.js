const pool = require('../connection').pool

function getSkuDetailsByProduct(pid) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM sku WHERE pid = $1', [pid], (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result.rows);
        })
    })
}

function getProductBySize(pid, size) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM sku WHERE pid = $1 AND size = $2', [pid, size], (error, results) => {
            if (error)
                reject(error)
            else
                resolve(results.rows)
        })
    })
}

function getProductByColour(pid, colour) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM sku WHERE pid = $1 AND colour = $2', [pid, colour], (error, result) => {
            if (error)
                reject(error)
            else
                resolve(result.rows)
        })
    })
}

function getProductByColourAndSize(pid, size, colour) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM sku WHERE pid = $1 AND colour = $2 AND size = $3', [pid, colour, size], (error, results) => {
            if (error)
                reject(error)
            else
                resolve(results.rows)
        })
    })
}

function updateInventory(id, stock) {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE sku SET stock = $2 WHERE id = $1', [id, stock], (error, results) => {
            if (error)
                reject(error)
            else
                resolve()
        })
    })
}

function getPriceById(id) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT id, price FROM sku where id = $1', [id], (error, result) => {
            if (error)
                reject(error)
            else
                resolve(result.rows)
        })
    })
}

module.exports = {
    getSkuDetailsByProduct,
    getProductBySize,
    getProductByColour,
    getProductByColourAndSize,
    updateInventory
}