const { pool } = require('../../data')


/**작성한 피드 DB에 저장 */
exports.store = async (user_id, image_id, content, created_at) => {
    const query = `INSERT INTO feed
    (user_id, image_id, content, created_at)
    VALUES (?,?,?)`;
    return await pool(query, [user_id, image_id, content, created_at]);
};

/**피드 목록 가져오기 */
exports.read = async (user_id, id) => {
    const query = `SELECT * FROM feed WHERE user_id=? and id=?`;
    let result = await pool(query, [user_id, id]);
    return result.length < 0 ? null : result[0];
};

/**피드 수정 */
exports.update = async (id, user_id, image_id, content) => {
    const query = `UPDATE feed SET user_id=?, image_id=?, content=?
        WHERE id=?`;
    return await pool(query, [user_id, image_id, content, id]);
};

/**피드 삭제 */
exports.erase = async (id) => {
    const query = `DELETE FROM feed
          WHERE id=?`;
    return await pool(query, [id]);
};
