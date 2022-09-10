const mongoose = require("mongoose");

exports.DBConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("database connected");
    })
    .catch((err) => {
      console.log({ error: err.message });
    });
};
