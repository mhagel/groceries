module.exports = {
    list: getList()
};

function getList() {
    return [
        {id: 1, name: 'Almondmilk', section: 'Dairy', amount: 1},
        {id: 2, name: 'Tofu', section: 'Dairy', amount: 2},
        {id: 3, name: 'Raisin Bran', section: 'Cereal', amount: 1},
        {id: 4, name: 'Coffee', section: 'Cereal', amount: 1},
        {id: 5, name: 'Tomatoes', section: 'Produce', amount: 3}
    ];
}
