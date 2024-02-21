const mongoose = require('mongoose')

const trainersSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            index : true,
            trim : true,
            require : true
        },
        phone : {
            type : Number,
            trim : true,
            min : 10,
            max : 10,
            unique : true,
            require : true
        },
        email : {
            type : String,
            unique : true,
            trim : true,
            require : true
        },
        member_type : {
            type : String,
            default : 'trainer',
        }
    }
)

const Trainer = mongoose.model('Trainer', trainersSchema)

module.exports = Trainer