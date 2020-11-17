const express=require('express');
const {check, validationResult}= require('express-validator');
const Person =require('../model/Person');

const Router =express.Router();

Router.post( `/addPerson`,
[
    check('name', 'name is required!').notEmpty(),
    check('age', 'age is required!').notEmpty(),
    check(' favoriteFoods', ' favoriteFoods is required!').notEmpty(),
],
async (req,res)=>{
    const errors = validationResult(req)
    if (errors.length>0) return res.json ({errors: errors.array()})
    const {name, age, favoriteFoods}=req.body;
    try{
        const newPerson = new Person ({
            name,
            age,
            favoriteFoods
        })
        newPerson.save();
        res.json(newContact)
    }catch(error){
        console.error(errors)
        res.json(error)
    }
});
Router.get(`/allPerson `, async (req,res)=>{
    try {
        const allPerson = await Person.find()
        res.json(allPerson);
}catch(error){
        console.error(errors)
        res.json(error)
}
});
Router.post(`/updatePerson/:id`, async (req,res)=>{
    const {id} =req.params;
    const {name, age, favoriteFoods}=req.body;
    try{
        const editPerson = 
        {
            name, 
            age, 
            favoriteFoods 
        }
        const updatePerson = await Person.findByIdAndUpdate({id},{editPerson})
        res.json(updatePerson)
    }catch(error){
        console.error(errors)
        res.json(error)
    }
} )
Router.delete(`/deletePerson/:id`, async (req,res)=>{
    const {id} = req.params;
    try{
        await Person.deleteOne({_id:id})
        res.json(`Person deleted`);
        try{

        }catch(error){
        console.error(errors)
        res.json(error)
        }
    }catch(error){
        console.error(errors)
        res.json(error)
    }
});
module.exports = Router;
