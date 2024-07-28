const Transaction = require('../models/transactionModel');

// Controller to generate data for the bar chart
const generateBarChartData = async (req, res) => {
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

    const priceRanges = [
      { min: 0, max: 100 },
      { min: 101, max: 200 },
      { min: 201, max: 300 },
      { min: 301, max: 400 },
      { min: 401, max: 500 },
      { min: 501, max: 600 },
      { min: 601, max: 700 },
      { min: 701, max: 800 },
      { min: 801, max: 900 },
      { min: 901, max: Number.MAX_SAFE_INTEGER }
    ];

    const barChartData = [];
    for (const range of priceRanges) {
      const count = await Transaction.countDocuments({
        ...query,
        price: { $gte: range.min, $lt: range.max }
      });
      barChartData.push({ range: `${range.min}-${range.max}`, count });
    }

    res.json(barChartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  generateBarChartData
};
