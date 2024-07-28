const express = require('express');
const router = express.Router();
const pieChartController = require('../controllers/pieChartController');

router.get('/', pieChartController.generatePieChartData);

module.exports = router;
