const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000; // This will be added to app.listen.
    
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
}));

require("./config/mongoose.config");

require("./routes/productmanager.routes")(app);

app.listen(port, () => console.log("Listening on port: " + port));