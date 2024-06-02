const { Router } = require('express');
const usersCtrl = require('../controllers/users.js');

const router = Router();

router.post('/', usersCtrl.createUser);
router.get('/:id',usersCtrlsersCtrl.createGrade);
router.get('/:id',usersCtrl.getGradeByID);
router.get('/:id', usersCtrl.updateUser);

module.exports = router;