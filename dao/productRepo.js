const pool = require('../connection').pool

function getProducts() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM product', (err, result) => {
            if (err)
                reject(err);
            else
                resolve(result.rows);
        })
    })
}

function getProductById(id) {
    return new Promise((resolve, reject) => {
        pool.query('SELECT * FROM product WHERE pid = $1', [id], (error, results) => {
            if (error)
                reject(error)
            else
                resolve(results.rows)
        })
    })
}

function createProduct(product_name) {
    return new Promise((resolve, reject) => {
        pool.query('INSERT INTO product (product_name) VALUES ($1)', [product_name], (error, result) => {
            if (error)
                reject(error)
            else
                resolve()
        })
    })
}

function updateProduct(id, product_name) {
    return new Promise((resolve, reject) => {
        pool.query('UPDATE product SET product_name = $1 WHERE pid = $2', [product_name, id], (error, results) => {
            if (error)
                reject(error)
            else
                resolve()
        })
    })
}

function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM product WHERE pid = $1', [id], (error, results) => {
            if (error)
                reject(error)
            else
                resolve()
        })
    })
}



module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}