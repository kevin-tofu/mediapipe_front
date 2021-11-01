const dotenv = require('dotenv')
dotenv.config()

exports.API_URL = process.env.API_URL || "http://localhost:5555"