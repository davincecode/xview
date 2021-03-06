require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
const sgMail = require("@sendgrid/mail")
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Expose-Headers", "x-auth-token")
  next()
})

app.get("/api", (req, res) => {
  res.send("API looks good! 🚀")
})

app.post("/api/email", (req, res) => {
  const { name, email } = req.body
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    from: email,
    templateId: "d-3baeeecfd1c54928b208e2a77d53b1fe",
    personalizations: [
      {
        to: {
          name: `${name}`,
          email: process.env.SENDGRID_EMAIL_RECIPIENT,
        },
        dynamic_template_data: {
          review: {
            url: "https://davincecode.ca",
          },
        },
      },
    ],
  }

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ success: true })
    })
    .catch((error) => {
      console.log("ERROR", error.response.body)
      res.status(401).json({ success: false })
    })
})

app.listen(port, () => console.log(`Listening on port ${port} 🤖`))
