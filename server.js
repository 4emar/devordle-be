const express = require('express');
const cron = require('node-cron');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({
    origin: ['https://devrodle-1bzpbtto9-4emar.vercel.app/', 'http://localhost:3000', 'https://devordle-pquu7w52q-4emar.vercel.app/'],
    optionsSuccessStatus: 200,
}));

let randomNumber = generateRandomNumber();
console.log('Initial random number:', randomNumber);

// Schedule a task to update the global variable at midnight every day
cron.schedule('0 0 * * *', () => {
    randomNumber = generateRandomNumber();
    console.log('Global variable updated at midnight:', randomNumber);
});

// Route to get the current global variable
app.get('/api/randomNumber', (req, res) => {
    res.json({ randomNumber });
});

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 292) + 1;
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
