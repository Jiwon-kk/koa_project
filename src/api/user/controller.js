const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

/** 해당 id의 회원정보들 */
exports.info = (ctx,next) => {
    let id = ctx.params.id;
    ctx.body = `${id} 회원에 대한 정보`;
}

exports.register = async (ctx,next) => {
    //회원가입 처리 모듈

    let token = await generateToken ({name: 'my-name'});
    ctx.body = token;
}

exports.login = async (ctx, next) => {
    //로그인 모듈
    let {id, pwd} = ctx.request.body;

    let result = "";
    if (id === 'admin' && pwd ==='1234') {
        result = await generateToken({name: 'abc'});
    } else {
        result ="아이디 혹은 패스워드가 올바르지 않습니다.";
    }
    ctx.body = result;
}

let generateToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload,SECRET_KEY, (error, token) => {
            if(error) {reject(error);}
            resolve(token);
        })
    })
}