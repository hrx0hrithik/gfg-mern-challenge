const Transaction = require('../models/transactionModel');

const listTransactions = async (req, res) => {
  try {
    const { month, page = 1, perPage = 10 } = req.query;

    const monthInt = parseInt(month);
    if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
      return res.status(400).json({ message: 'Invalid month parameter. Please provide a valid month between 1 and 12.' });
    }

    const query = {
      $expr: {
        $eq: [{ $month: '$dateOfSale' }, monthInt]
      }
    };
    
    const totalCount = await Transaction.countDocuments(query);
    const totalPages = Math.ceil(totalCount / perPage);

    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.json({
      totalPages,
      currentPage: page,
      transactions
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  listTransactions
};
