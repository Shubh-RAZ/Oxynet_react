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
            parentId:{
                type:String
            },
            outOfStock:{
                type:Boolean,
                default:false
            },
            lastUpdate:{
                type:String
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
            district :  {
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
                validate: {
                    validator: function(v) {
                        return /d{10}/.test(v);
                    },
                    message: '{VALUE} is not a valid 10 digit number!'
                },
                required : true
            },
            phoneNo2 :  {
                type : Number,
                validate: {
                    validator: function(v) {
                        return /d{10}/.test(v);
                    },
                    message: '{VALUE} is not a valid 10 digit number!'
                },
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
