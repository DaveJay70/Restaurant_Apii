const mongoose = require('mongoose');
const schema = mongoose.Schema({
    ItemID : String,
    Name : String,
    Image :  String,
    Description : String,
    Price : String,
    Category : String
});
module.exports = mongoose.model('Item',schema); 
