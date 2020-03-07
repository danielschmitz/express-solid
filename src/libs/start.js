module.exports = app => {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`Express started. Port: ${port}`)
    })
}