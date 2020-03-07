const express = require('express')
const app = express()

const libs = require('./libs')
libs.forEach(lib => require(`./libs/${lib}`)(app))
