import mongoose from "mongoose"

//create a Schema

const questionSchema = new mongoose.Schema({
    Done:{
     type: Boolean, 
     default: false,
    },
    Topic:{
        type:String,
        required:true,

    },
     Problem:{
        type:String,
        required:true,

    },
    URL:{
        type:String,
        required:true,
    },
    level:{
        type:String,
    },
    rating:{
        type:Number,
    }

    
},{timestamps:true});

//create model
const Question = mongoose.model("question",questionSchema);

export default Question;


// notes and bookmark ,date