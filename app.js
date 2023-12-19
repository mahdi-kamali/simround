const express = require("express")
const mongoose = require('mongoose');
const bodyParse = require("body-parser")
const multer = require("multer");
const { ErrorHandler } = require("./libs/ErrorHandler");
const upload = multer()
const dotEnv = require("dotenv");
const { isAdmin } = require("./libs/UserRoleChecker");



// Mongo Connection
mongoose.connect('mongodb://127.0.0.1:27017/simround')
    .then(() => console.log('DataBase Connected!'));



const port = 5000;
const app = express()


// Express Uses
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));




// Auth Routes
app.use("/auth", require("./routes/auth/registerRouter"))
app.use("/auth", require("./routes/auth/loginRouter"))



// Sim-cart Routes
app.use("/sim-cart", require("./routes/sim-carts/simCartsRouter"))





// Admin Panel 
app.use("/admin-panel",isAdmin,
 require("./routes/admin-panel/adminPanelRouter"))





// Error Hanlder 
app.use(ErrorHandler)






app.listen(port, () => {
    console.log(`Server Running => ${port}`)



})
