//require('dotenv').config()
const express = require('express')
const compression = require('compression')
const expressValidator = require('express-validator')
const useragent = require('express-useragent')
const logger = require('./config/logger')
const { loggerMiddleware, errorLoggerMiddleware } = require('./middlewares/http-logger')
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');


//connect mongodb
require('./config/mongoose')


const app = express()
app.set('port', process.env.PORT || 3000)
app.set('trust proxy', true)

// Middlewares
app.use(compression())
app.use(expressValidator())
app.use(express.json())
app.use(useragent.express())
app.use(loggerMiddleware)
app.use(errorLoggerMiddleware)

// add routes
logger.debug('Add health routes')
app.use('/health', require('./routes/health'))
logger.debug('Add books routes')
app.use('/book', require('./routes/book'))

// add swagger documentation
app.use('/swagger',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
);

logger.info('open the docs at /swagger');


module.exports={
    app
}  