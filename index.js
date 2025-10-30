const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_PORT, MONGO_IP, MONGO_DATABASE } = require('./config/config');
const postRoutes = require('./routes/post_route');
const userRoutes = require('./routes/user_route');




// Database name ထည့်ပေးပါ
const MONGO_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/${MONGO_DATABASE}?authSource=admin`;

// Middleware to parse JSON requests


app.use(express.json()); // This is crucial for parsing JSON bodies
app.use(express.urlencoded({ extended: true }));


app.use('/posts', postRoutes);
app.use('/users', userRoutes);

// Connect to MongoDB
const tryWithReconnect = () => {
    mongoose
        .connect(MONGO_URL)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('Failed to connect to MongoDB', err);
            setTimeout(tryWithReconnect, 5000); // Retry after 5 seconds
        });
};

tryWithReconnect();



app.get('/', (req, res) => {
  res.send('Hello express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});