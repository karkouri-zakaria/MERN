const express = require('express')
const router = express.Router()
const { getCars, getCar, addCar, updateCar, deleteCar } = require('../controllers/CarsController')
const {register, login, test} = require('../controllers/UserController.js')
const verifyToken = require('./verifyToken.js')

router.route('/Cars').get(getCars)
router.route('/Car/:id').get(getCar)
router.route('/addCar').post( addCar)
router.route('/update/:idCar').patch(verifyToken, updateCar)
router.route('/delete/:idCar').delete(verifyToken, deleteCar)

router.route('/register').post(register)
router.route('/login').post(login)


module.exports = router