const express = require("express")
const cors = require("cors")
require("dotenv").config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const connectDB = require("./models/db")
connectDB()

const ProductRoutes = require("./routes/ProductRoutes")
const CartRoutes = require("./routes/CartRoutes")

app.use("/api/products", ProductRoutes)
app.use("/api/cart", CartRoutes)

app.get("/", (req, res) => {
  res.send("Hello, World!")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})