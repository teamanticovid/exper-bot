const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect("mongodb+srv://Exper:nirupam2006@cluster0.157xr.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});
module.exports = mongoose;
