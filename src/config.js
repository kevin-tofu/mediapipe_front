const dotenv = require('dotenv')
dotenv.config()

console.log(process.env)
// exports.HOST_URL = process.env.API_URL || "http://localhost:1112"
// exports.API_POST = process.env.API || "keypoint/image-raw"

exports.HOST_URL = process.env.API_URL || "http://localhost:1110"
exports.API_POST = process.env.API || "skeleton_image"
exports.API_GET = process.env.API || "skeleton_image"