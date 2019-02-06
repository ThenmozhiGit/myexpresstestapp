var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactSchema = new Schema(
  {
    contact_name: {type: String, required: true, max: 50},
    contact_phone_number: {type: Number, required: true, max: 10},
    contact_email_id:{type: String , required:true, max: 100},
    contact_query: {type: String, required: true, max: 200}

  }
);

// Virtual for contact's URL
ContactSchema
.virtual('url')
.get(function () {
  return '/contact' + this._id;
});

//Export model
module.exports = mongoose.model('Contact', ContactSchema);