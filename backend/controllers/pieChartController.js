const Transaction = require('../models/transactionModel');

// Controller to generate data for the pie chart
const generatePieChartData = async (req, res) => {
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


    const categories = await Transaction.distinct('category', query);

    const pieChartData = {};
    for (const category of categories) {
      const count = await Transaction.countDocuments({ ...query, category });
      pieChartData[category] = count;
    }

    res.json(pieChartData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  generatePieChartData
};
