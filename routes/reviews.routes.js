const express = require('express')
const router = express.Router()
let reviews = [{ id: 1, productId: 1,
rating: 5, comment: "good!" }]
let idCounter = 2

const sendResponse = (res, status, data) => {
    res.status(status).json({ success: status < 400, data:
        Array.isArray(data)? data : [data],
        meta: {timestamp: new 
        Date().toISOString(), count:
        Array.isArray(data)? data.atlength :
        1
        }    })
    }

    router.get('/', (req, res) => {
        let result = reviews
        if(req.query.productId) result =
        reviews.filter(r => r.productId ==
            req.query.productId) 
            sendResponse(res, 200, result)
    } ) 
    router.get('/:id', (req, res) => {
        const review = reviews.find(r =>
            r.id == req.params.id )
            if(!review) return
            res.status(404).json({success: false,
                error: {code: "NOT_FOUND", message:
                    "review not found"      }   })
                    sendResponse(res, 200, review)
    })
    router.post('/', (req, res) => {
        const { productId, rating } =
        req.body
        if(!productId || !rating ) return res.status (404).json({succes: false,
            error: {code: "BAD_REQUEST", message: 
                "productId and rating required"  } })
                const newReview = {id: idCounter++,...req.body}
                reviews.push(newReview)
                sendResponse(res, 201, newReview)
    }  )
    router.delete('/:id',  (req, res )=> {
        reviews = reviews.filter(r => r.id!
            =req.params.id)
            res.status(204).send()
    }
) module.exports = router
