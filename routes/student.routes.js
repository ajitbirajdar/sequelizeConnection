var express = require('express');
const {body,check} =require('express-validator')
var router = express.Router();
const studentController =require('../controllers/student.controllers');

/* GET home page. */
router.get('/',studentController.getAll);
router.post('/new',

[check('data.*.Name').notEmpty().withMessage('Name is required').isLength({min:2, max:150}).isAlpha().withMessage('Please enter a valid Name'),
check('data.*.Email').notEmpty().withMessage('Email is required').isEmail().withMessage('Please enter a valid Email'),
check('data.*.Age').notEmpty().withMessage('Age is required').isNumeric().withMessage('Please enter a valid Age')
]


,studentController.createUser);
module.exports = router;
