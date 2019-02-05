var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var MetricSchema = new Schema(
  {
    metric_name: {type: String, required: true, max: 100},
    metric_type: {type: String, required: true, max: 100},
  }
);

// Virtual for author's URL
MetricSchema
.virtual('url')
.get(function () {
  return '/catalog/metric/' + this._id;
});

//Export model
module.exports = mongoose.model('Metric', MetricSchema);