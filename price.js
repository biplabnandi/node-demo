function finalPrice(item, discount) {
    item.price -= item.price * discount / 100
    return JSON.stringify(item)
}

module.exports = {
    finalPrice
}