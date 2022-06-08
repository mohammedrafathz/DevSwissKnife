require("dotenv");

console.log(process.env.MONGO_URI);
module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: 'secret',
  f_url: "localhost:3000"
}