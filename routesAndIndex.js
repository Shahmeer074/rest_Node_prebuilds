categoryRoutes.js

const express = require('express');
const router = express.Router();
const categoriesController = require('../Controller/Categories');


router.get('/',categoriesController.getAllCategories);

module.exports = router;



index.js inside Routes



