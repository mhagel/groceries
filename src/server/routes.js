var router = require('express').Router();
var four0four = require('./utils/404')();
var mongoUtil = require('./mongoUtil');
mongoUtil.connect();

router.get('/list', getList);
router.get('/item/:id', getItem);
router.get('/*', four0four.notFoundMiddleware);

router.post('/list', addItem);

module.exports = router;

//////////////

function getList(req, res, next) {
  var list = mongoUtil.list();
  list.find().toArray(function(err, docs) {
    console.log(JSON.stringify(docs));
    res.status(200).send(docs.data.list);
  })

}

function getItem(req, res, next) {
    var id = +req.params.id;
    var item = data.list.filter(function(p) {
        return p.id === id;
    })[0];

    if (item) {
        res.status(200).send(item);
    } else {
        four0four.send404(req, res, 'item ' + id + ' not found');
    }
}

function addItem(req, res) {
  var itemName = req.params.name;

  console.log("item name: ", itemName);

  res.status(201);
}
