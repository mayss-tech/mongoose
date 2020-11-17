const mongoose=require('mongoose');

const personSchema=mongoose.Schema({
    name:{
    type:String,
    required:true},
    age:Number,
    favoriteFoods:Array,String

});
module.exports = Person = mongoose.model('contact',personSchema )