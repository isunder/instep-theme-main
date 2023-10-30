const expressAsyncHandler = require("express-async-handler");
const dotenv = require("dotenv");
dotenv.config();
const createaddres = expressAsyncHandler(async (res, peq) => {
console.log("first")

})
module.exports={createaddres}