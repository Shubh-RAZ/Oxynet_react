import Prod from '../Model/prod.js';

// changed checked
export const getAllProd = async (req,res) => {
    try{
        const producers = await Prod.find();
        res.status(200).json(producers);
    }
    catch(error){
        res.status(400).json({message : "Bad request getProduct"});
    }
}

// changed checked
export const addProducer = async(req,res) => {
    try{
        const producers = Prod(req.body);
        await producers.save()
        res.status(200).json(producers);
    }
    catch(error){
        res.status(400).json({message : "Bad request addProducer"});
    }

}

// changed checked
export const addProduct = async (req,res) => {
    const email = req.params.email;
    const product = req.body;
    const empty = false;
    if(product.quantity<=0){
        empty = true;
    }
    console.log(email)
    try{
        await Prod.findOneAndUpdate(
            {email : email}, 
                {
                    $push : {
                        card : {
                            outofstock : empty,
                            quantity : product.quantity,
                            shopName : product.shopName,
                            address : product.address,
                            city : product.city,
                            state : product.state,
                            cost : product.cost,
                            phoneNo1 : product.phoneNO1,
                            phoneNo2 : product.phoneNO2,
                        } 
                    }
                }
            )
        res.status(200).json({message : "Added report"});
    }
    catch(error){
        res.status(400).json({message : "Bad request addProduct"});
    }
}

export const getByCity = async (req,res) => {
    const city = params.city;
    try{
        const product = await Prod.find();
        res.status(200).json(product);
    }
    catch(error){
        res.status(400).json({message : "Bad request getProdByCity"});
    }
}

// changed checked
export const getById = async (req,res) => {
    const id = req.params.id;
    try{
        const product = await Prod.find({_id : id});
        res.status(200).json(product);
    }
    catch(error){
        console.log(error)
        res.status(400).json({message : "Bad request getById"});
    }
}

//changed checked
export const UpdateById = async (req,res) => { 
    const product = req.body
    const shopId = req.params.id
    const prodEmail = req.params.email
    
    try{
        const market = await Prod.find({email : prodEmail});
        const shops = market[0].card;
        const shop = shops.filter(shops => shops._id == shopId);
        console.log(shop)
        
        shop[0].quantity = product.quantity
        shop[0].cost = product.cost
        shop[0].phoneNO1 = product.phoneNO1;
        shop[0].phoneNO1 = product.phoneNO2;

        console.log(shop)
        
        try{
            await Prod.updateOne({ email : prodEmail }, {
                $set : {
                    card : shops,
                }
            })
        }
        catch(error){
            res.status(400).json({message : "Bad request update by Id"});
        }

        res.status(200).json({message : "updated"});
    }
    catch(error){
        res.status(400).json({message : "Bad request update by id"});
    }
    
}

//changed checked
export const reportArray = async (req,res) => {
    const email = req.params.email;
    const shopId = req.params.id;
    try{
        const market = await Prod.find({email});
        const shops = market[0].card;
        const shop = shops.filter(shops => shops._id == shopId);
        res.status(200).json(shop[0].reported);
    }
    catch(error){
        res.status(400).json({message : "Bad request reportArray"});
    }
}

//changed checked
export const reportArrayLength = async (req,res) => {
    const email = req.params.email;
    const shopId = req.params.id;
    try{
        const market = await Prod.find({email});
        const shops = market[0].card;
        const shop = shops.filter(shops => shops._id == shopId);
        res.status(200).json(shop[0].reported.length);
    }
    catch(error){
        res.status(400).json({message : "Bad request reportArrayLength"});
    }
}

//changed checked
export const report = async (req,res) => {
    const reason = req.body.reason;
    const email = req.body.email;
    const prodEmail = req.params.email
    const shopId = req.params.id
    try{
        const market = await Prod.find({email : prodEmail});
        const shops = market[0].card;
        const shop = shops.filter(shops => shops._id == shopId);
        const reportedArray  = shop[0].reported;
        const report = {
            email : email,
            reason : reason,
        }
        reportedArray.push(report);
        
        try{
            await Prod.updateOne({ email : prodEmail }, {
                $set : {
                    card : shops,
                }
            })
        }
        catch(error){
            res.status(400).json({message : "Bad request update-into reported array"});
        }


        res.status(200).json({message : "Added report"});
    }
    catch(error){
        res.status(400).json({message : "Bad request report"});
    }
}

// changed checked
export const deleteMarketByEmail = async (req,res) => {
    const email = req.params.email;
    try{
        const result = await Prod.deleteOne({email  : email});
        if(!result.deletedCount){
            res.status(200).json({message : "Not found"});
        }
        else res.status(200).json({message : "deleted"});
    }
    catch(error){
        res.status(400).json({message : "Bad request delete"});
    }
}

// changed checked
export const deleteCardByEmail = async (req,res) => {
    const shopId = req.params.id;
    const email = req.params.email
    try{
        await Prod.findOneAndUpdate(
            { email: email }, 
            { $pull: { 
                      card: {
                            _id : shopId
                        }  
                    } 
            })
        res.status(200).json({message : "removed file successfully"});
    }
    catch(error){
        res.status(400).json({message : "Bad request in deleting"});
    }
}
















/*

try{
        await Prod.findOneAndUpdate(
            { _id: id }, 
            { $pull: { 
                      card: {
                            shopName: product.shopName,
                        }  
                    } 
            })
        res.status(200).json({message : "removed file successfully"});
    }
    catch(error){
        res.status(400).json({message : "Bad request in deleting"});
    }

    try{
        await Prod.updateOne(
            {_id : id}, 
                {
                    $addToSet : {
                        card : {
                            outofstock : product.outofstock,
                            quantity : product.quantity,
                            shopName : product.shopName,
                            address : product.address,
                            city : product.city,
                            state : product.state,
                            cost : product.cost,
                            phoneNo1 : product.phoneNO1,
                            phoneNo2 : product.phoneNO2,
                        } 
                    }
                }
            )
        res.status(200).json({message : "updated file successfully"});
    }
    catch(error){
        res.status(400).json({message : "Bad request UpdateById"});
    }

    */