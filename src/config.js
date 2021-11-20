const dotenv = require('dotenv')
dotenv.config()

console.log(process.env)
exports.URL_HOST = process.env.URL_HOST || "http://localhost:5555"
// exports.URL_HOST = process.env.URL_HOST || "http://mymediapipeserver"
// exports.URL_HOST = process.env.URL_HOST || "https://mykeypointserver.kevin-asobi.com"
// exports.URL_HOST =  "https://mykeypointserver.kevin-asobi.com"

exports.API_POST = process.env.API || "image"
exports.API_GET = process.env.API || "image"

exports.TITLE = 'Keypoint-Detector'
exports.DIALOG_TITLE = 'Choose a photo that includes a human body'
exports.DIALOG_TEXTCONTENT = 'Image-Button to choose picture is on your left-side. This module is going to estimate human posture after your submitting'