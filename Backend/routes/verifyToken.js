const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config({path:'../config/config.env'});

module.exports = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({msg: 'No token, authorization denied'})
    try {
        var decoded = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        res.status(500).json({msg: 'Server error'})
    }
    
}