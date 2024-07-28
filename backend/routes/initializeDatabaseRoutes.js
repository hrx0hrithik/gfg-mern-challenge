const express = require('express');
const Transaction = require('../models/transactionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
      const jsonData = await response.json();
  
      await Transaction.insertMany(jsonData);
  
      res.status(200).json({ message: 'Database initialized with seed data' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to initialize database' });
    }
  });

  module.exports = router;