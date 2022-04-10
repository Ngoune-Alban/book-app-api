import express from 'express';
const auth = require('../middlewares/auth');
const bookCtrl = require('../controllers/book');
const router = express.Router();

router.post('/', auth, bookCtrl.createOneBook);
// router.get('/', auth, bookCtrl.findAllBooks);
// router.get('/:id', auth, bookCtrl.findOneBook);
// router.put('/:id', auth, bookCtrl.updateOneBook);
// router.delete('/:id', auth, bookCtrl.deleteOneBook);



module.exports = router;