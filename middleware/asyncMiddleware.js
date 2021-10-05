// function for try the route , if there is an error -> excute errorHandler middleware

const asyncMiddleware = (handler) => {
    return async (req, res, next) => {
        try {
            await handler(req,res) 
        }
        catch(err) {
            next(err)
        }
    }
}

module.exports = asyncMiddleware