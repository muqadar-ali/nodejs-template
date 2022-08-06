const Joi = require('joi'); 

const bookSchema = Joi.object().keys({ 
    title: Joi.string().required()
});

const validateCreateBook = (req, res, next) => {
    const result = bookSchema.validate(req.body) 
    if(result && result.error)
        return next(result.error)
    return next()
}


module.exports = {
    validateCreateBook
}