import {
  HTTP
} from "../utils/http.js"
class BookModel extends HTTP {
  //获取热门书籍(概要)
  getHotList() {
    return this.request({
      url: "book/hot_list"
    })
  }

  //获取热搜关键字
  getHotKeyword() {
    return this.request({
      url: "book/hot_keyword"
    })
  }

  //搜索书籍
  searchBook(start,q) {
    return this.request({
      url: "book/search",
      data: {
        start: start,
        count: 20,
        summary: 1,   //0为完整内容,1为简介
        q: q
      }
    })
  }

  //获取书籍详细信息
  bookDetail(id) {
    return this.request({
      url: `book/${id}/detail`
    })
  }

//获取书籍短评
  getComments(id) {
    return this.request({
      url: `book/${id}/short_comment`
    })
  }
}

export {
  BookModel
}