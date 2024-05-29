// Importing the required modules mongoose 
// mongoose is a library that allows us to interact with MongoDB database
import {model,Schema,ObjectId} from "mongoose";

const schema = new Schema({
    username:{
        type:String,
        //trim removes any whitespace before or after the string
        trim:true,
        required:true,
        unique:true,
        lowercase:true
    },
    name:{
        type:String,
        trim:true,
        //required:true,
        default:''
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        maxLength: 256,
        minLength: 6,
    },
    address: {
        type: String,
        trim: true,
        default: ''
    },
    company:{
        type:String,
        trim:true,
        default:''
    },
    phone:{
        type:String,
        trim:true,
        default:''
    },
    photo: {},
    role:{
        type: [String],
        default:['Buyer'],
        //enum is a validation that checks if the value is one of the allowed values
        enum: ['Buyer','Seller','Admin']
    },
    // the properties that user accessed before.
    // ref is a reference to the 'Ad' model
    requiredProperties: [{type: ObjectId, ref: 'Ad'}],
    wishlist: [{type: ObjectId, ref: 'Ad'}],
     resetCode: {
        type: String,  // Ensure this is a valid type
        default: ''
      },
},
//
    { timestamps:true}
);

//exporting the model 'User' which is a mongoose model with schema 'schema' which allows us to interact with the 'User' collection in the database
export default model('User',schema);