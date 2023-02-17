let Cars = require('../Models/Car')

exports.getCars = async(req,res)=>{
    const {page=1, limit=4} = req.query
    const cars = await Cars.find().limit(limit).skip((page-1)*limit).sort({_id:'desc'}).exec()
    const Count = await Cars.countDocuments().exec()
    res.status(200).json({
        success:true,
        count: Math.ceil(Count/limit),
        cars
    })
    }
//---------------------------------------
exports.getCar = async (req,res)=>{
    const car = await Cars.findOne({
        _id: req.params.id
    })
    res.status(200).json({
        success:true,
        car
    })
}
//---------------------------------------
exports.addCar =async (req,res)=>{
    const car = new Cars(req.body)
    await car.save()
    res.status(200).json({
    
    success:true,
    car
        
    })    
}
//---------------------------------------
exports.updateCar =async (req,res)=>{
    const carUpdated =await Cars.updateOne({_id:req.params.idCar},{ $set:req.body})
    res.status(200).json({
    success:true,
    carUpdated
    })
}
//---------------------------------------
exports.deleteCar =async (req,res)=>{
del_fil = await Cars.deleteOne({_id:req.params.idCar})
res.status(200).json({
success:true,
del_fil
})
}