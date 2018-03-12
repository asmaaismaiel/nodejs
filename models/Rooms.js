var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var rooms=new Schema({
_roomnumber:Number
});
mongoose.model("rooms",rooms);