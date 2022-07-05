const express = require('express');

const finance = require('../Services/fincance')

const router = express.Router();

router.post('/getFinance',finance.getFincance);

router.post('/filterFinance',finance.filterFincance)

router.post('/FinanceBreakdown',finance.FincanceBreakdown)

module.exports = router;