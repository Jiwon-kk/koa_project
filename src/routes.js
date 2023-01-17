const Router = require('@koa/router');
const router =new Router;

const multer = require('@koa/multer');
const path = require('path');
const upload = multer({
    dest: path.resolve(__dirname, '../', 'storage')
})

const {myLogging} = require('./middleware/logging')

const webController = require('./web/controller');
const apiUserController = require('./api/user/controller');
const apiFeedControoler = require('./api/feed/controller');
const { verify } = require("./middleware/auth");
const apiFileController = require('./api/file/controller')

router.use(myLogging);

router.post('/file/upload',upload.single('file'), apiFileController.upload);
router.get('/file/:id',require('./api/file/controller').download);

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