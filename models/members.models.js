const mongoose = require('mongoose')

const membersSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true,
            trim : true
        },
        email : {
            type : String,
            require : true,
            unique : true,
            lowercase : true,
            trim : true
        },
        password : {
            type : String,
            require : [true, "Password is required"],
            trim : true
        },
        phone : {
            type : Number,
            minLength : 10,
            maxLength : 10,
            unique : true
        },
        address : {
            type : String,
            require : true
        },
        gender : {
            type : String,
            require : true,
            enum : ['male', 'female']
        },
        active_membership : {
            type : String,
            require : true
        },
        join_date : {
            type : Date,
            default : Date.now()
        },
        expiry_date : {
            type : Date,
        },
        status : {
            type : String,
            default : 'active',
            enum : ['active', 'inactive']
        },
        member_type : {
            type : String,
            default : 'member',
            enum : ['member', 'trainer']
        }
    }
)

const Member = mongoose.model('Member', membersSchema)

module.exports = Member