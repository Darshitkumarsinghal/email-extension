const request = require("supertest")
const express = require("express")
const validateRoute = require("../routes/validate")

const app = express()
app.use(express.json())
app.use("/api", validateRoute)

describe("POST /api/validate-email", () => {
  it("should return valid company info", async () => {
    const res = await request(app)
      .post("/api/validate-email")
      .send({ email: "sudhanshu@manyts.com" })

    expect(res.statusCode).toBe(200)
    expect(res.body.company).toBe("Manyts")
  })

  it("should reject invalid email", async () => {
    const res = await request(app)
      .post("/api/validate-email")
      .send({ email: "bademail" })

    expect(res.statusCode).toBe(400)
    expect(res.body.error).toBe("Invalid email format")
  })

  it("should return unknown for unknown email", async () => {
    const res = await request(app)
      .post("/api/validate-email")
      .send({ email: "someone@unknown.com" })

    expect(res.statusCode).toBe(200)
    expect(res.body.company).toBe("Unknown")
  })
})
