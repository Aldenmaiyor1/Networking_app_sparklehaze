import express from "express";

const PORT = 3000

const app = express()

import routes from "./Routes/routes.js"
app.use("/", routes)

app.listen(PORT, () => console.log(`App server listening on port ${PORT}!`));