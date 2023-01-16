/**
 * 클라이언트의 요청 ip와 
 */
exports.myLogging = async(ctx, next) => {
    let clientIp = ctx.request.ip;
    let url = ctx.originalUrl;
    console.log(`${clientIp.replace("::ffff:","")}에서 호출 :: ${url}`);
    await next();
}