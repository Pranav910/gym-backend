class APIError extends Error{

    constructor(message, statusCode){
        super(message)
        this.message = message || "Internal server error"
        this.statusCode = statusCode
    }
}

module.exports = APIError