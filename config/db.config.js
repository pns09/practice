
var mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb+srv://Srinivas:admin@cluster0-heezl.mongodb.net/test?retryWrites=true')

.then(() => {

console.log("DB connected")

}, err => {

console.log("DB error")

}

);