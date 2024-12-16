import foodModel from "../models/foodModel.js"
import fs from "fs"


//Add food item

const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category,
    })
    try{
        await food.save();
        res.json({success:true,message:"Food Added Successfully"})
    }catch (error) {
        console.log(error);
        res.json({success:false,message:"Something went wrong"})
    }
}

//All food list 
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})  
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Something went wrong"})
    }
}

export {addFood}