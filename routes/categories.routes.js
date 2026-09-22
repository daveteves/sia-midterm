const express = require('express')
const router = express.Router()

let categories = [{ id: 1, name: "tech"}, {id: 2, name: "food"}]
let idCounter = 3

const sendResponse = (res, status, data) => {
    res.status(status).json({ success: status < 400, data:
        Array.isArray(data)? data : [data],
        meta: { timestamp: new
        Date().toISOString(), count:
        Array.isArray(data)? data.length :1
   } })
}

router.get('/', (req, res) =>
    sendResponse(res, 200, categories))
    router.get('/:id', (req, res) => {
        const category = categories.find(c => c.id == req.params.id)
        if (!category) return
        res.status(404).json({success: false, error: {code: "NOT FOUND", message: "Category Not Found"}})
        sendResponse (res, 200, category)
    })

router.post('/', (req, res) => {
    const { name } = req.body
    if(!name) return
    res.status(400).json({sucess: false, error: {code: "BAD REQUEST", message: "name required"}})
})

const newCat



module.exports = router
