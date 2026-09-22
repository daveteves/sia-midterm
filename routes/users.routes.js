const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: [],
        message : "Users retrieved successfully" 
    })
});

module.export = router;