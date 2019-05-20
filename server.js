const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

const cors = require('cors');

const corsOption = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
};

// Middleware
app.use(cors(corsOption));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static assets for production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Send every other request to the React app
// Define any API routes before this runs
if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

// Server listens on specified port
app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
})