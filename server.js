const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const notFound = require('./middleware/notFound');
const serverError = require('./middleware/serverError');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(cors());

app.use(morgan('common'));

app.use(notFound);

app.use(serverError);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


