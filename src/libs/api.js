
const api = require('../api')

module.exports = app => {
    api.forEach(router => app.use('/api', require(`../api/${router}`)))
}

