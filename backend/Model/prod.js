import mongoose from 'mongoose';

const ProdSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    availability :  {
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
    email :  {
        type : String,
        required : true,
        unique : true
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
});

const Prod = mongoose.model('Prod', ProdSchema);

export default Prod;