
const router = require('express').Router()

router.get('/foo', (req, res) => {
    res.send("foo router")
})

module.exports = router