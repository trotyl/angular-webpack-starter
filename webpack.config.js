const env = process.env.NODE_ENV || 'local'

console.log(`Start webpack in: ${env}`)

switch (env) {
    case 'local':
        module.exports = require('./config/webpack.debug')
        break
    default:
        module.exports = require('./config/webpack.deploy')
}
