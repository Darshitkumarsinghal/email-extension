const express = require("express")
const cors = require("cors") // ✅ import cors
const app = express()

const validateRoute = require("./routes/validate")

// ✅ Enable CORS globally (dev-friendly)
app.use(cors())

app.use(express.json())
app.use("/api", validateRoute)

app.listen(3000, () => console.log("✅ Server running on http://localhost:3000"))
