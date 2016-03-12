var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  title:{
    type:String,
  }, 
  content:{
    type:String,
  }
});

var Blog = mongoose.model('Blog', BlogSchema);

var Promise = require('bluebird');
Promise.promisifyAll(Blog);
Promise.promisifyAll(Blog.prototype);

module.exports = Blog;