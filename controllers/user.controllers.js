const Member = require("../models/members.models.js")
const APIError = require("../utils/APIError.js")
const APIResponse = require("../utils/APIResponse.js")

const register = async (req, res) => {


    try {

        const { email, name, password, phone, active_membership, address, gender } = req.body


        if(
            [email, name, password, active_membership, address, gender].some((field) => field?.trim() === "")
        ){
            new APIError("All fields are required", 400)
            return res.status(400).json(new APIResponse(400, null, "failed to register user due to invalid credentials"))
        }

        const createdUser = await Member.create(req.body)
        return res.status(200).json(new APIResponse(200, createdUser, "USER REGISTERED SUCCESSFULLY"))


    } catch (error) {
        console.log('FAILED TO SAVE MEMBER IN THE DATA BASE DUE TO : ', error);
        res.send(`FAILED TO SAVE MEMBER IN THE DATA BASE DUE TO : ${error}`)
    }

}

const login = async (req, res) => {

    const {email, password} = req.body

    if(
        [email, password].some(field => field.trim() === "")
    ) {
        new APIError("all fields are required", 400)
        return res.status(400).json({message : "all fields are required"})
    }

    const registeredMember = await Member.findOne({email})

    if(!registeredMember){
        new APIError("NO SUCH MEMBER WITH CREDENTIALS EXISTS IN THE DATABASE", 404)
        return res.status(404).json(new APIResponse(404, null, "member not registered"))
    }

    if(registeredMember && registeredMember.password !== password){
        new APIError("INVALID EMAIL OR PASSWORD", 401)
        return res.status(401).json(new APIResponse(401, null, "invalid email or password"))
    }
    else{
        return res.status(200).json(new APIResponse(200, registeredMember, "user logged in successfully"))
    }
}

module.exports = { register, login }