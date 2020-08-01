const express = require("express");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/follow", require("./routes/api/follow"));
app.use("/api/triprequest", require("./routes/api/triprequest"));
app.use("/api/selleraccount", require("./routes/api/selleraccount"));
app.use("/api/tourpackage", require("./routes/api/tourpackage"));
app.use("/api/backpack", require("./routes/api/backpack"));
app.use("/api/packages", require("./routes/api/packages"));
app.use("/api/filter", require("./routes/api/filter"));


const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server is hot & live at port ${PORT}`));
