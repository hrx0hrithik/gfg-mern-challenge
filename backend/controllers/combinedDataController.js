// Controller to fetch data from all APIs and combine the responses
const getCombinedData = async (req, res) => {
  try {
    const { month } = req.query

    const backendUrl = process.env.URL || "http://localhost:8000"

    // Fetch data from all APIs
    const transactionsResponse = await fetch(
      `${backendUrl}/api/transactions?month=${month}`
    )
    const statisticsResponse = await fetch(
      `${backendUrl}/api/statistics?month=${month}`
    )
    const barChartDataResponse = await fetch(
      `${backendUrl}/api/bar-chart?month=${month}`
    )
    const pieChartDataResponse = await fetch(
      `${backendUrl}/api/pie-chart?month=${month}`
    )

    // Convert responses to JSON
    const transactionsData = await transactionsResponse.json()
    const statisticsData = await statisticsResponse.json()
    const barChartData = await barChartDataResponse.json()
    const pieChartData = await pieChartDataResponse.json()

    // Combine responses
    const combinedData = {
      transactions: transactionsData,
      statistics: statisticsData,
      barChartData: barChartData,
      pieChartData: pieChartData,
    }

    res.json(combinedData)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error" })
  }
}
module.exports = { getCombinedData }
