const mongoose=require('mongoose');
const {Schema}=mongoose;

const catSchema= new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    image: {
        type : String,
        required : true,
    },
    create : {
        type : Date,
        default : Date.now
    }
})

const cat=mongoose.model('cat',catSchema);
module.exports=cat;