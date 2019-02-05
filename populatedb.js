#! /usr/bin/env node

console.log('This script populates some test Bug schemas to your database.Specified database as argument - e.g.: populatedb mongodb://your_username:your_password@your_dabase_url');

// Get arguments passed on command line
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

var async = require('async')
var Metric = require('./models/Metric')

var mongoose = require('mongoose');
var mongoDB = userArgs[0];
mongoose.connect(mongoDB, { useNewUrlParser:true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
mongoose.connection.on('Error', console.error.bind(console, 'MongoDB connection error:'));

var metrics = []


function metricCreate(metric_name,metric_type, cb) {
    var metric= new Metric({ metric_name: metric_name, metric_type:metric_type });
    //  console.log(Bug_name,Bug_type)   ;
    metric.save(function (err) {
      if (err) {
        cb(err, null);
        return;
      }
      console.log('New Metric: ' + metric);
      metrics.push(metric)
      cb(null, metric);
    }   );
  }


  function createMetrics(cb) {
    async.parallel([
        function(callback) {
            metricCreate("Javascript","Application", callback);
        },
        function(callback) {
            metricCreate("Javascript","Application", callback);
           
        },
        function(callback) {
            metricCreate("Slow Function","Performance", callback);
        },
        function(callback) {
            metricCreate("Slow Performance","Performance", callback);
        }
        ],
        // optional callback
        cb);
}
async.series([
    createMetrics
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Metrics: '+metrics);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});

