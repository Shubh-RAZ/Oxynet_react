import Prod from '../Model/prod.js';

export const getAllProd = async (req,res) => {
    console.log("recieved");
    try{
        const producers = await Prod.find();
        res.status(200).json(producers);
    }
    catch(error){
        res.status(400).json({message : "Bad request getProduct"});
    }
}

export const addProduct = async (req,res) => {
    try{
        // const email = req.query.email;
        const product = req.body;
        // product.email = email;
        const newProduct = Prod(product);
        const result = await newProduct.save();  
        res.status(201).json(result)      
    }
    catch(error){
        res.status(400).json({message : "Bad request addProduct"});
    }
}

export const getByCity = async (req,res) => {
    try{
        const city = req.query.city;
        console.log(city);
        const product = await Card.find({ city : city});
        res.status(200).json(product);
    }
    catch(error){
        res.status(400).json({message : "Bad request getProdByCity"});
    }
}

export const getById = async (req,res) => {
    try{
        const email = req.query.email;
        const product = await Prod.find({email : email});
        res.status(200).json(product);
    }
    catch(error){
        console.log(error)
        res.status(400).json({message : "Bad request getById"});
    }
}

export const UpdateById = async (req,res) => { 
    try{
        const email = req.query.email;
        const product = await Prod.find({email : email});
        if(!product)return;
        product.set({
            cost : req.body.cost,
            availability : req.body.availability,
            phoneNO1 : req.body.phoneNo1,
            phoneNO2 : req.body.phoneNo2,
        })
        product.save();
        res.status(200).json(product);
    }
    catch(error){
        res.status(400).json({message : "Bad request UpdateById"});
    }
}

export const reportArray = async(req,res) => {
    try{
        emailProd = req.query.ep;
        const reportArray = await Prod.find({ email }).select({ reported });
        res.status(200).json(reportaArray);

    }
    catch(error){
        res.status(400).json({message : "Bad request reportArray"});
    }
}

export const report = async (req,res) => {
    try{
        emailProd = req.query.ep;
        const reason = req.body.reason;
        const email = req.body.email;
        await Prod.findOneAndUpdate(
            {email : emailProd}, 
            {
                $push : {
                    reported : {
                        email : email,
                        reason : reason
                    } 
                }
            }
        )
        res.status(200).json({message : "Added report"});
    }
    catch(error){
        res.status(400).json({message : "Bad request report"});
    }
}

export const deleteProd = async (req,res) => {
    try{
        const email = req.query.email;
        const result = await Prod.deleteOne({email  : email});
    }
    catch(error){
        res.status(400).json({message : "Bad request delete"});
    }
}