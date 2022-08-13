const mongoose = require('mongoose') 
const url = `mongodb+srv://${process.env.UNAME}:${process.env.PWORD}@cluster0.mqncckt.mongodb.net/?retryWrites=true&w=majority`;
const MongoClient = require('mongodb').MongoClient;

  const connectionParams = { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
  mongoose.connect(url,connectionParams).then( () => { console.log('Connected to mongodb database successfully!');
  }).catch( (err) => { console.error(`${err}`) });

function insertDb(coll, data) {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("trace");
  var myobj = data;
  dbo.collection(coll).insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(data+" inserted");
    db.close();
  });
  });
}

function collDb(coll) {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("trace");
  dbo.createCollection(coll, function(err, res) {
    if (err) throw err;
    console.log(coll+" created!");
    db.close();
  });
  });
}

function findDb(coll, posting) {
  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("trace");
  dbo.collection(coll).findOne({}, function(err, result) {
    if (err) console.log(err);
    if (!posting) {
      console.log(result);
    } else {
      posting(result);
    }
    db.close();
  });
  });
}

module.exports = { 
  insertDb,
  collDb,
  findDb
};
