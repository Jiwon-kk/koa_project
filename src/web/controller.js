/** 사이트 소개 홈페이지 영역*/
exports.home =(ctx,next) => {
    console.log("홈페이지 호출");
    ctx.body = '홈페이지';
}

/*exports.page = (ctx,next) => {
    let page = ctx.params.page;
    let content;
    switch (page) {
        case 'terms':
            content = "이용약관";
            break;
        case 'policy':
            content = "개인정보 처리방침"
            break;
    }
    ctx.body =content;
}*/

/** 약관, 처리방침 등 정보성 페이지 영역(정적 페이지)*/
exports.page = (ctx,next) => {
    //let name = ctx.params.name; //아래와 완전히 똑같다.
    let { name } = ctx.params;    //위와 완전히 똑같다.
    
    ctx.body = name;
}
