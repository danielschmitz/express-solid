const express = require('express')

module.exports = app => {
    app.use('/', express.static('public'))
}