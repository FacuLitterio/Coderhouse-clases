const app = require("express")();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { REACT_APP_PATH } = require("./config");

const PORT = 4000;

app.use(express.json());
app.use(morgan("dev"));
app.use("/API/users", require("./Routes/users.router"));
app.use("/API/business", require("./Routes/business.router"));
app.use("/API/orders", require("./Routes/orders.router"));

// Archivo index.html del build de React
app.use(express.static(REACT_APP_PATH));

app.get("*", (req, res) => {
  res.sendFile(REACT_APP_PATH);
});

app.listen(PORT, () => console.log(`Server on Port ${PORT}`));
