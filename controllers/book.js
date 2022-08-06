const { BookDAL } = require('../dal')

const getCount=async(req,res,next) => {
    const c = await BookDAL.count()
    return res.send({'count': c})
}

const getAllRecords=async(req,res,next) => {
    const data = await BookDAL.findAll()
    return res.send({'data': data})
}

const createBook = async (req,res,next) => {
    const item = await BookDAL.createBook(req.body)
    if(!item) {
        res.status(400);
        return res.send('Current book failed');
    }
    return res.send(item)
} 



module.exports={
    getCount
    ,getAllRecords
    ,createBook
}