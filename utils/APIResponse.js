class APIResponse {
    constructor(statusCode, data, message){
        this.statusCode = statusCode
        this.data = data
        this.message = message
    }
}

module.exports = APIResponse