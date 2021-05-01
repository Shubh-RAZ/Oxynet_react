import Prod from '../Model/prod.js';

// changed
export const getAllProd = async (req,res) => {
    try{
        const producers = await Prod.find();
        res.status(200).json(producers);
    }
    catch(error){
        res.status(400).json({message : "Bad request getProduct"});
    }
}

// changed
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

// changed
export const addProduct = async (req,res) => {
    try{
        const email = req.query.email;
        const product = req.body;

        await Prod.findOneAndUpdate(
            {email : email}, 
                {
                    $push : {
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
        res.status(200).json({message : "Added report"});
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
        const product = await Prod.find({ city : city});
        res.status(200).json(product);
    }
    catch(error){
        res.status(400).json({message : "Bad request getProdByCity"});
    }
}

// changed
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

// changed 
export const UpdateById = async (req,res) => { 
    const product = req.body;
    console.log(product)
    try{
        await Prod.findOneAndUpdate(
            { email: email }, 
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
        await Prod.findOneAndUpdate(
            {email :email}, 
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
}

export const reportArray = async(req,res) => {
    try{
        email = 'Talha@gmail.com';
        const reportArray = await Prod.find({ email }).select({ reported });
        res.status(200).json(reportArray);

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

// changed
export const deleteAllByEmail = async (req,res) => {
    try{
        const email = req.query.email;
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

// changed
export const deleteCardByEmail = async (req,res) => {
    const shopname = req.body.shopName;
    const email = req.body.email
    try{
        await Prod.findOneAndUpdate(
            { email: email }, 
            { $pull: { 
                      card: {
                            shopName: shopname,
                        }  
                    } 
            })
        res.status(200).json({message : "removed file successfully"});
    }
    catch(error){
        res.status(400).json({message : "Bad request in deleting"});
    }
}