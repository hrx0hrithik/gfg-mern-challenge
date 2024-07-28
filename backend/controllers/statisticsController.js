const Transaction = require('../models/transactionModel');

// Controller to get statistics for the selected month
const getStatistics = async (req, res) => {
  try {
    const { month } = req.query;
    const monthInt = parseInt(month);
    if (isNaN(monthInt) || monthInt < 1 || monthInt > 12) {
      return res.status(400).json({ message: 'Invalid month parameter. Please provide a valid month between 1 and 12.' });
    }
    const query = { 
      $expr: { 
        $eq: [{ $month: '$dateOfSale' }, monthInt] 
      } 
    };
    
    const totalSaleAmountResult  = await Transaction.aggregate([
      { $match: query },
      { $group: { _id: null, total: { $sum: '$price' } } }
    ]);

    const totalSaleAmount = totalSaleAmountResult.length ? totalSaleAmountResult[0].total : 0;

    const totalSoldItems = await Transaction.countDocuments({
      ...query,
      sold: true
    });

    const totalNotSoldItems = await Transaction.countDocuments({
      ...query,
      sold: false
    });

    res.json({
      totalSaleAmount,
      totalSoldItems,
      totalNotSoldItems
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getStatistics
};
