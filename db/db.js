// 连接mongodb
const mongoose = require('mongoose')

let url = `mongodb://localhost:27017/testEB`
mongoose.connect(url)

mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ');
});
/**
* 连接异常 error 数据库连接错误
*/
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err);
});
/**
* 连接断开 disconnected 连接异常断开
*/
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});


module.exports = mongoose