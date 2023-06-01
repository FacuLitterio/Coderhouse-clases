const app = require("express")();
const morgan = require("morgan");
const { PORT } = require("./config");

app.use(morgan("dev"));

app.use("/API/contacts", require("./Routes/contacts.routes"));

app.listen(PORT, () => console.log(`Server on Port ${PORT}`));
