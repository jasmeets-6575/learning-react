require("dotenv").config();
const connectDB = require("./db/db");
const express = require("express");
const cors = require("cors");
const users = require("./routes/auth")
const notes = require("./routes/notes")
const app = express();

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/auth",users)
app.use("/api/notes",notes)

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
