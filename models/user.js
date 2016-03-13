var passportLocalMongoose = require('passport-local-mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  // name:{
  //   type:String,
  // }, 
  // password:{
  //   type:String,
  // }
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);


var Promise = require('bluebird');
Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);

// Class methods
// UserSchema.statics.findByName = function search () {
//   return this.where('name', new RegExp(name, 'i')).exec(cb);
// }
module.exports = User;