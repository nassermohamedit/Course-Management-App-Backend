const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('common'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});


