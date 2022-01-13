
const mongoose = require('../db.js')
const Schema = mongoose.Schema
const ArticleSchema = new Schema({
  title: String,
  created_time: Date,
  tag: [{
    tag_id: String,
    tag_text: String
  }]
})

const Article = mongoose.model('Article', ArticleSchema);



// 以下内容放入数据库操作
let methods = { 'queryArticle': 'Article' }


class Mongodb {
  constructor() {

  }

  query () {
    return new Promise((resolve, reject) => {
      Article.find({}, (err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
  add (obj) {
    return new Promise((resolve, reject) => {
      let data = new Article(obj)
      data.save((err, res) => {
        if (err) {
          return reject(err)
        }
        return resolve(res)
      })
    })
  }
}



module.exports = new Mongodb() 
