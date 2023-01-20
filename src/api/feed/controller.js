const {isNewFeed} =require('../../common/formatter/date');
const moment = require('moment');
require("moment/locale/ko");
const {store, read, update, erase} =require('./query');

/** 전체 피드보기 */
exports.index = (ctx, next) => {
    let query = ctx.query;
    let result = isNewFeed("2023-01-20 11:30");
    console.log(`새로 작성된 글인가?${result}`);
    ctx.body = query;
};

/**새 피드 작성 처리 */
exports.store = async (ctx,next) => {
    let { user_id, image_id, content } = ctx.request.body;
    let {created_at} = dateFromNow(2023-01-20 11:30);
    let { affectedRows } = await store(user_id, image_id, content);
    if (affectedRows > 0) {
      ctx.body = { result: "새 피드 업로드" };
    } else {
      ctx.body = { result: "실패" };
    }
};

/**피드 상세 보기 */
exports.show = (ctx) => {
    let id = ctx.params.id;
    ctx.body = `${id} 피드 상세`;
}

/**피드 수정 */
exports.update = async (ctx,next) => {
    let id = ctx.params;
    let { user_id, image_id, content } = ctx.request.body;
    let { affectedRows } = await update(id, user_id, image_id, content);
    if (affectedRows > 0) {
        ctx.body = `${id} 피드 수정`;
    } else {
        ctx.body = { result: "fail" };
    }
};

/**피드 삭제 */
exports.delete = async (ctx) => {
    let id = ctx.params;
    let { affectedRows } = await del(id);
    if (affectedRows > 0) {
        ctx.body = `${id} 피드 수정`;
    } else {
        ctx.body = { result: "fail" };
    }
}