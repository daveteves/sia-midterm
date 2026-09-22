const express = require('express')
const router = express.Router()
let orders = [{id: 1, userId: 2,
    total: 50000, status: "pending"
}]
let idCounter = 2

const sendResponse = (res, status, data) => {
    res.status(status).json({ success:
         status < 400, data})
         
    Array.isArray(data)? data : [data],
    meta; timestamp: new
        Date(). toISOString(), Count;
        Array.isArray(data)? data.length :1
    }

router.get('/', (req, res) =>
sendResponse(res, 200, categories))
router.get(':id', (req, res) =>{
    const orders = orders.find(c => c.id == req.params.id)
    if (!category) return
    res.status(404).json({success: false, error: {code: "NOT FOUND", message: "Order Not Found"}})
    sendResponse (res, 200, category)
})

router.post('/', (req, res) => {
    const { name } = req.body
    if(!name) return
    res.status(400).json({success: false, error: {code: "BAD REQUEST", message: "name required"}})
})
