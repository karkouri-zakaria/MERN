const User = require('../Models/User.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config({path:'../config/config.env'});

exports.register = async (req, res) => {
    const email = await User.findOne({email: req.body.email})

    if (email) return res.status(400).json({ error: 'Email already exists' })

    const salt = await bcrypt.genSalt(10)
    const passwdHash = await bcrypt.hash(req.body.password, salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: passwdHash
    })

    try {
        await user.save()
        res.status(201).json({ "message": 'User created' ,"user":user})
    } catch (error) {
        console.error(error)
    }
    
}

exports.login = async (req, res) => {
    const user = await User.findOne({email: req.body.email})

    if (!user) return res.status(400).json({ error: 'User not found'})

    const verified = await bcrypt.compare(req.body.password, user.password)

    if (!verified) return res.status(400).json({ error: 'Invalid password'})

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {expiresIn: '1h'})
    res.header('auth-token', token).send(token)

}
