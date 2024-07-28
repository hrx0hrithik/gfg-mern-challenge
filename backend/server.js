const express = require('express');
var cors = require('cors')
const connectToMongo = require("./db");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors())

connectToMongo()

const initializeDatabaseRoutes = require('./routes/initializeDatabaseRoutes');
const transactionsRoutes = require('./routes/transactionsRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');
const barChartRoutes = require('./routes/barChartRoutes');
const pieChartRoutes = require('./routes/pieChartRoutes');
const combinedDataRoutes = require('./routes/combinedDataRoutes');

app.use('/api/seed-data', initializeDatabaseRoutes);
app.use('/api/transactions', transactionsRoutes);
app.use('/api/statistics', statisticsRoutes);
app.use('/api/bar-chart', barChartRoutes);
app.use('/api/pie-chart', pieChartRoutes);
app.use('/api/combined-data', combinedDataRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the test API");
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
