// mongo connection (First step)
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const express = require("express");
const userRoutes = require('./routes/api/user.route'); 
const mailRoute = require("./routes/api/mail.route");
const contactRoutes = require("./routes/api/contact.route");
const pgRoutes=require("./routes/api/pg.route")
const backend = express();
//const fileUpload = require("express-fileupload");





// CORS (Second step) 2
backend.use(cors({
  origin: "*",
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
})
);

//backend.use(express.json());
backend.use(express.json({ limit: '10mb' })); // Increase this limit as required
backend.use(express.urlencoded({ limit: '10mb', extended: true })); // Same for url-encoded




// routing 3
backend.use(routes);
backend.use("/api/auth/users", userRoutes);
backend.use("/api/auth", mailRoute);
backend.use("/api/contact", contactRoutes);
backend.use('/api/pgs', pgRoutes);
//backend.use(fileUpload());




// mongoose connect 1
mongoose.connect("mongodb+srv://gkanishka989:vRPLQnGUM1ItFLN5@cluster0.vqyox.mongodb.net/PGFinderDB?retryWrites=true&w=majority&appName=Cluster0")

.then(() =>
    console.log("Mongo Connected")
  )
  .then(() => {
    const PORT = 3000;
    backend.listen(PORT, () => {
      console.log("Server started on port", (PORT));
    });
  })
  .catch((err) => console.log(err));