const moment = require('moment');
require("moment/locale/ko");

/**
 * 오늘 날짜의 글일경우 N분전 또는 N시간전 등으로 표기
 * 오늘 이전의 날짜의 경우엔 YYYY-MM-DD 형식으로 표기
 * @param {*} date 
 * @returns 
 */
exports.dateFromNow = (date) => {
    let now = moment().format("YYYY-MM-DD,HH:mm:ss");
    if (date === monent()) {
      let time = moment(date).fromNow();
    }
};
  


/**현재 등록한 글이 새 글인지 판단해주는 함수
 * 새 10분을 기반으로 새글인지 판단
 * @param {string} date 
 * @returns {boolean} /새 글이면 true 아니면 false
 */
exports.isNewFeed = (date) => {
    let currentTime = moment().add(-10,'minutes');
    let feedDate =moment(date);
    
    return feedDate.isAfter(currentTime);
};