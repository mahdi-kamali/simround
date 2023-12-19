
const express = require("express")
const SimCartModel = require("../../models/SimCartModel")
const router = express.Router()



router.get("/", async (req, res, next) => {
    try {
        const simCarts = await SimCartModel.find()
        return res.json(simCarts)
    }
    catch (e) {
        next(e)
    }
})


module.exports = router