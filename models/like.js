
import {HTTP} from "../utils/http.js"
class LikeModel extends HTTP {
  //点赞，取消点赞
  like(behavior, art_id, type){
    let url = behavior == 1 ? "like" : "like/cancel"
    return this.request({
      url: url,
      data: {
        art_id: art_id,
        type: type
      },
      method: "post"
    })
  }
}
export {
  LikeModel
}