const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const app = express();

// 引入users.js
const users = require("./routes/api/users");
// 引入profile.js
const profiles = require("./routes/api/profiles");

// DB config
const db = require("./config/keys").mongoURI;

// 使用body-parser中间件
app.use(bodyParser.urlencoded({expended:false}));
app.use(bodyParser.json());

// Connect to mongodb
mongoose.connect(db, { useNewUrlParser: true })
        .then( () => console.log("MongoDB Connected"))
        .catch( err => console.log(err))

// passport初始化
app.use(passport.initialize());

// (passport)是上面声明的那个对象，把它传递过去，这样有关的操作就不用在这里写，可以去一个单独的文件passport.js中写
require("./config/passport")(passport)

// app.get("/", (req,res) => {
//   res.send("Hello World!");
// })

// 使用routes
app.use("/api/users", users);
app.use("/api/profiles", profiles);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})