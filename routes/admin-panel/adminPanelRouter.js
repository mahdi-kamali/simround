

const express = require("express")
const SimCartModel = require("../../models/SimCartModel")
const { fetchUser } = require("../../libs/UserFetch")
const { paginateQuery } = require("../../libs/paginateQuery")
const router = express.Router()


router.post("/sim-carts/new", async (req, res, next) => {
    try {
        const data = req.body


        const seller = await fetchUser(req.headers.token)


        const newSimCart = new SimCartModel(data)
        newSimCart.sellerID = seller._id



        return res.json(await newSimCart.save())
    }
    catch (e) {
        return next(e)
    }
})

router.get("/sim-carts/:pageNumber", async (req, res, next) => {

    const pageNumber = req.params.pageNumber

    try {
        const simCarts = await paginateQuery(SimCartModel, pageNumber, 10)
        return res.json(simCarts)
    }
    catch (e) {
        return next(e)
    }
})





router.get("/orders/:pageNumber", async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber) || 1; // Extract page number from URL params, default to 1 if not provided
        const itemsPerPage = 10; // Set the number of items per page

        const paginatedOrders = await paginateQuery(OrderModel, pageNumber, itemsPerPage);

        return res.json(paginatedOrders);
    } catch (error) {
        return next(error);
    }
});








module.exports = router