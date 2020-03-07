
const router = require('express').Router()

router.get('/bar', (req, res) => {
    throw new Error("fake error /api/bar ")
})

module.exports = router
