

const express = require("express")
const SimCartModel = require("../../models/SimCartModel")
const { fetchUser } = require("../../libs/UserFetch")
const { paginateQuery } = require("../../libs/paginateQuery")
const BuyOrderMode = require("../../models/BuyOrderMode")
const SellOrderModel = require("../../models/SellOrderModel")
const router = express.Router()


router.post("/sim-cards/new", async (req, res, next) => {
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



router.get("/sim-cards/:pageNumber", async (req, res, next) => {

    const pageNumber = req.params.pageNumber

    try {
        const simCarts = await paginateQuery(SimCartModel, pageNumber, 10)
        return res.json(simCarts)
    }
    catch (e) {
        return next(e)
    }
})





// خرید های ما از مشتری
router.get("/buy-orders/:pageNumber", async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber) || 1; // Extract page number from URL params, default to 1 if not provided
        const itemsPerPage = 10; // Set the number of items per page

        const paginatedOrders = await paginateQuery(BuyOrderMode, pageNumber, itemsPerPage);

        return res.json(paginatedOrders);
    } catch (error) {
        return next(error);
    }
});


// فروش های ما به مشتری
router.get("/sell-orders/:pageNumber", async (req, res, next) => {
    try {
        const pageNumber = parseInt(req.params.pageNumber) || 1; // Extract page number from URL params, default to 1 if not provided
        const itemsPerPage = 10; // Set the number of items per page

        const paginatedOrders = await paginateQuery(SellOrderModel, pageNumber, itemsPerPage);

        return res.json(paginatedOrders);
    } catch (error) {
        return next(error);
    }
});




















module.exports = router