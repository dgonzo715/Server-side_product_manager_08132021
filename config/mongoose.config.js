const mongoose = require('mongoose');
const db_name = "productManager"
 
mongoose.connect("mongodb://localhost/" + db_name, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
   .then(() => console.log("Successfully Connected to the " + db_name + " database"))
   .catch((err) => { 
    console.log("Something went wrong when connecting to the database " + db_name + ": ")
    console.log(err);  
});