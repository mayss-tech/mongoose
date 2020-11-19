const mongoose=require('mongoose');

const personSchema=mongoose.Schema({
    name:{
    type:String,
    required:true},
    age:{
    type:Number,
    required:true
    },
    favoriteFoods:{
    type:Array,
    required:true
    }

});
module.exports = Person = mongoose.model('person',personSchema )