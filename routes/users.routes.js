const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        data: [],
        message : "Users retrieved successfully" 
    });
});

router.get("/:id", (req, res) =>{
    const id = req.params.id;

    res.json({
        success: true,
        data: {
            id: id,
            name: "Sample User"
        }
    });
});

module.export = router;