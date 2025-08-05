const express = require("express")
const router = express.Router()
const { isValidEmail } = require("../utils/emailValidator")

const mockData = {
  "sudhanshu@manyts.com": { name: "Sudhanshu", company: "Manyts" },
  "kriti@manyts.com": { name: "Kriti", company: "Manyts" },
  "darshit@sociolla.com": { name: "Darshit", company: "Sociolla" }
}

router.post("/validate-email", (req, res) => {
  const { email } = req.body
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" })
  }

  const data = mockData[email.toLowerCase()] || { name: "Unknown", company: "Unknown" }
  return res.json(data)
})

module.exports = router
