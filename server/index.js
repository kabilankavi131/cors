const express = require('express')
const cors = require('cors')
const app = express()
app.use(
    cors({
        origin: "http://127.0.0.1:5500",
        methods: ["GET"]
    })
)
app.get("/getData", (req, res) => {
    res.json(
        {
            name: "Kabilan",
            message: "Data fetched from server"
        }
    )
})

app.listen(5000, () => {
    console.log("server is running on port 5000");
})