var router = require('express').Router();
var four0four = require('./utils/404')();
var mongoUtil = require('./mongoUtil');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

mongoUtil.connect();

router.get('/list', getList);
router.get('/item/:id', getItem);
router.get('/*', four0four.notFoundMiddleware);

router.post('/list', jsonParser, addItem);

module.exports = router;

//////////////

function getList(req, res) {
  var list = mongoUtil.list();
  list.find().toArray(function(err, docs) {
    console.log(JSON.stringify(docs));
    res.json(docs);
  })

}

function getItem(req, res, next) {
    var id = +req.params.id;
    // var item = data.list.filter(function(p) {
    //     return p.id === id;
    // })[0];

    if (item) {
        res.status(200).send(item);
    } else {
        four0four.send404(req, res, 'item ' + id + ' not found');
    }
}

function addItem(req, res) {
  var item = req.body;
  var list = mongoUtil.list();

  list.insertOne(item, function(err, docs) {
    if (err) {
      console.log('insert error');
    } else {
    console.log('insert success:', docs.result.ok === 1);
    res.json(docs);
    }
  });



}
