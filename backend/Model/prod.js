import mongoose from 'mongoose';

const ProdSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: true
    },
	password: {
         type: String
    },
	mobile:{
        type:String,
        unique: true
    },
    card:[
        {
            outofstock:{
                type:Boolean,
                default:false
            },
            quantity :  {
                type : String,
                required : true
            },
            shopName :  {
                type : String,
                required : true
            },
            address :  {
                type : String,
                required : true
            },
            city :  {
                type : String,
                required : true
            },
            state :  {
                type : String,
                required : true
            },
            cost : {
                type : Number,
                required : true
            },
            phoneNo1 : {
                type : Number,
                required : true
            },
            phoneNo2 :  {
                type : Number,
                required : true
            },
            reported : [
                {
                    email : String,
                    reason : String,
                }
            ]
        }
    ]
});

const Prod = mongoose.model('Prod', ProdSchema);
export default  Prod;
