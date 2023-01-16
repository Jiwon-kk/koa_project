const Router = require('@koa/router');
const router =new Router;

const {myLogging} = require('./middleware/logging')

const webController = require('./web/controller');
const apiUserController = require('./api/user/controller');
const apiFeedControoler = require('./api/feed/controller');
const { verify } = require("./middleware/auth");

router.use(myLogging);

router.get('/',myLogging,webController.home);
router.get('/page/:page',webController.page);

router.get('/',webController.home);
router.get('/page/:page',webController.page);

router.post('/api/user/register',apiUserController.register);
router.post('/api/user/login',apiUserController.login);

router.use(verify);
router.get('/api/user/:id',apiUserController.info);

router.get('/api/feed',apiFeedControoler.index);
router.post('/api/feed',apiFeedControoler.store);
router.get('/api/feed/:id',apiFeedControoler.show);
router.put('/api/feed/:id',apiFeedControoler.update);
router.delete('/api/feed/:id',apiFeedControoler.delete);

module.exports = router;