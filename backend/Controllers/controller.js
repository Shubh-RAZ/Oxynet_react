import Prod from '../Model/prod.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken'
dotenv.config({ path: './config.env' });

const JWT_SECRET = process.env.JWT_SECRET

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
        // console.log(producers);
        await producers.save()
        const token = jwt.sign(
			{
				id: producers._id
			},
			JWT_SECRET
		)
        // console.log(token);
        res.status(200).json({token:token});
    }
    catch(error){
        res.status(400).json({message : error});
    }
}

// changed checked
export const addProduct = async (req,res) => {
    const Id = req.params.uId;
    const product = req.body;
    const empty = false;
    if(product.quantity<=0){
        empty = true;
    }
    // console.log(Id)
    // const supplier = await Prod.findOne({_id:Id}).lean()
    // console.log(supplier);
    try{
        const result = await Prod.findOneAndUpdate(
            {_id : Id}, 
                {
                    $push : {
                        card : {
                            outOfStock : empty,
                            quantity : product.quantity,
                            shopName : product.shopName,
                            address : product.address,
                            district : product.district,
                            state : product.state,
                            cost : product.cost,
                            phoneNo1 : product.phoneNO1,
                            phoneNo2 : product.phoneNO2,
                        } 
                    }
                }
            )
        // console.log(result);
        res.status(200).json({message : "Added product"});
    }
    catch(error){
        res.status(400).json({message : "Bad request addProduct"});
    }
}

// cadded
export const getByState = async (req,res) => {
    const state_ = req.query.state;
    // console.log(state_);
    try{
        const product = await Prod.find();
        const stateProduct = [];
        for(var i=0;i<product.length; i++){
            for(var j=0; j<product[i].card.length; j++){
                if(product[i].card[j].state == state_){
                    stateProduct.push(product[i].card[j]);
                }
            }
        }
        res.status(200).json({status:'ok',cards:stateProduct});
    }
    catch(error){
        res.status(400).json({message : "Bad request getProdByState"});
    }
}

//changed checked
export const getBydistrict = async (req,res) => {
    const district_ = req.params.district;
  //  console.log(district_);
    try{
        const product = await Prod.find();
        const districtProduct = [];
        for(var i=0;i<product.length; i++){
            for(var j=0; j<product[i].card.length; j++){
                if(product[i].card[j].district == district_){
                    districtProduct.push(product[i].card[j]);
                }
            }
        }
        res.status(200).json(districtProduct);
    }
    catch(error){
        res.status(400).json({message : "Bad request getProdBydistrict"});
    }
}

// changed checked
export const getById = async (req,res) => {
    const Id = req.query.Id
    try{
        const product = await Prod.find({_id : Id});
        // console.log(product[0].card);
        res.status(200).json(product[0].card);
    }
    catch(error){
      //  console.log(error)
        res.status(400).json({message : "Bad request getById"});
    }
}

//changed checked
export const UpdateById = async (req,res) => {
    const product = req.body
    const shopId = req.body.sId
    const token = req.body.token    //get token
	const jswt = jwt.verify(token, JWT_SECRET)	//  extracting Id from the token
    const userId = jswt.id
    const empty = false;
    if(product.quantity<=0){
        empty = true;
    }
  //  console.log(shopId)

    if(shopId.length>0){
        try{
            const market = await Prod.find({_id : userId});
            // console.log(market);
            const shops = market[0].card;
            const shop = shops.filter(shops => shops._id == shopId);
            // console.log(shop);
            const d = new Date()
            const now = d.toLocaleString()
            
            shop[0].lastUpdate = now
            shop[0].quantity = product.quantity
            shop[0].cost = product.cost
            shop[0].phoneNO1 = product.phoneNO1
            shop[0].phoneNO2 = product.phoneNO2
            shop[0].state = product.state
            shop[0].district = product.district
            shop[0].address = product.address
            shop[0].shopName = product.shopName

            try{
                await Prod.updateOne({ _id : userId }, {
                    $set : {
                        card : shops,
                    }
                })
            }
            catch(error){
                res.status(400).json({message : error});
            }
    
            res.status(200).json({status:'ok',message : "updated"});
        }
        catch(error){
            res.status(400).json({message : error});
        }
    }
    else{
        try{
          //  console.log(userId);
            const d = new Date()
            const now = d.toLocaleString()
            await Prod.findOneAndUpdate(
                {_id : userId}, 
                    {
                        $push : {
                            card : {
                                outOfStock : empty,
                                lastUpdate:now,
                                quantity : product.quantity,
                                shopName : product.shopName,
                                address : product.address,
                                district : product.district,
                                state : product.state,
                                cost : product.cost,
                                phoneNo1 : product.phoneNo1,
                                phoneNo2 : product.phoneNo2,
                            } 
                        }
                    }
                )
            res.status(200).json({status:'ok',message : "Added product"});
        }
        catch(error){
            res.status(400).json({message : error});
        }
    }
    
}

//changed checked
export const reportArray = async (req,res) => {
    const Id = req.params.uId;
    const shopId = req.params.sId;
    try{
        const market = await Prod.find({Id});
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
    const Id = req.params.uId;
    const shopId = req.params.sId;
    try{
        const market = await Prod.find({Id});
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
    const reason = req.params.reason;
    const email = req.params.email;
    const Id = req.params.Id
    const shopId = req.params.sId
    try{
        const market = await Prod.find({Id : Id});
        const shops = market[0].card;
        const shop = shops.filter(shops => shops._id == shopId);
        const reportedArray  = shop[0].reported;
        const report = {
            email : email,
            reason : reason,
        }
        reportedArray.push(report);
        
        try{
            await Prod.updateOne({ Id : Id }, {
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
    const Id = req.params.uId;
    try{
        const result = await Prod.deleteOne({Id  : Id});
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
    const token = req.body.token    //get token
	const jswt = jwt.verify(token, JWT_SECRET)	//  extracting Id from the token
    const Id = jswt.id
    const shopId = req.body.sId
  //  console.log(Id,shopId);
    try{
        await Prod.findOneAndUpdate(
            { _id: Id }, 
            { $pull: { 
                      card: {
                            _id : shopId
                        }  
                    } 
            })
        res.status(200).json({status:'ok',message : "removed file successfully"});
    }
    catch(error){
        res.status(400).json({message : "Bad request in deleting"});
    }
}















