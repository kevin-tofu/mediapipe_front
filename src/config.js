const dotenv = require('dotenv')
dotenv.config()

console.log(process.env)
// exports.HOST_URL = process.env.API_URL || "http://localhost:1112"
// exports.API_POST = process.env.API || "keypoint/image-raw"

exports.HOST_URL = process.env.API_URL || "http://localhost:1110"
// exports.HOST_URL = process.env.API_URL || "http://mymediapipeserver"
// exports.HOST_URL = process.env.API_URL || "https://mykeypointserver.kevin-asobi.com"

// exports.API_POST = process.env.API || "image2skeleton"
exports.API_POST = process.env.API || "skeleton_image"
exports.API_GET = process.env.API || "skeleton_image"