const express = require('express')
require('dotenv').config()

const familyRoute = require('./routes/familyRoute.js')
const assetRoute = require('./routes/assetRoute.js')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();

app.get("/", (req, res) => {
  res.send('list endpoints')
})


//middleware
app.use(cors())
app.use(cookieParser());
app.use(express.json());

// app.use("/", salaryRoute);
app.use("/api/family", familyRoute);
app.use("/api/asset", assetRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  return res.status(errorStatus).json({ success: false, status:errorStatus, message: errorMessage, stack: err.stack,})
})

app.listen(8800, ()=> {
  console.log ("Server Running On Port 8800")
})
