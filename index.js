const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const router =new Router;

//서버 실행 포트, 환경변수 PORT에 값이 없으면 3000
const port = process.env.PORT || 3000;

//바디파서 셋팅 http request의 body부분을
//활용할 수 있도록 해줌
app.use(bodyParser({formLimit: '5mb'}));

//정적 파일(public 디렉토리를 지정) ,
//__dirname는 현재 실행되고 있는 홈 디렉터리
app.use(require('koa-static')(`${__dirname}/public`));

//라우터 설정
router.use(require('./src/routes').routes());
app.use(router.routes());
app.use(router.allowedMethods());

//웹 서버 실행
app.listen(port, () => {
 console.log(`웹서버가 ${port}에서 구동중... ${port}`);
});