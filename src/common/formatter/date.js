const moment = require('moment');
require("moment/locale/ko");

/*exports.dateFromNow = (date) => {
    let date = moment().format()
 start of Time
 isAfter
}*/


/**현재 등록한 글이 새 글인지 판단해주는 함수
 * 새 10분을 기반으로 새글인지 판단
 * @param {string} date 
 * @returns {boolean} /새 글이면 true 아니면 false
 */
exports.isNewFeed = (date) => {
    let currentTime = moment().add(-10,'minutes');
    let feedDate =moment(date);
    
    console.log(currentTime);
    console.log(feedDate);
    return feedDate.isAfter(currentTime);
}