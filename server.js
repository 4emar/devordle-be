// const express = require('express');
// const cron = require('node-cron');
// const cors = require('cors');
//
// const app = express();
// const port = process.env.PORT || 3001;
//
// app.use(cors({
//     origin: ['https://devrodle-1bzpbtto9-4emar.vercel.app/', 'http://localhost:3000', 'https://devordle-pquu7w52q-4emar.vercel.app/'],
//     optionsSuccessStatus: 200,
// }));
//
// let randomNumber = generateRandomNumber();
// console.log('Initial random number:', randomNumber);
//
// // Schedule a task to update the global variable at midnight every day
// cron.schedule('0 0 * * *', () => {
//     randomNumber = generateRandomNumber();
//     console.log('Global variable updated at midnight:', randomNumber);
// });
//
// // Route to get the current global variable
// app.get('/api/randomNumber', (req, res) => {
//     res.json({ randomNumber });
// });
//
// // Function to generate a random number
// function generateRandomNumber() {
//     return Math.floor(Math.random() * 292) + 1;
// }
//
// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
// randomNumber.js

module.exports = async (req, res) => {
    try {
        // Generate a random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // Set CORS headers to allow any origin
        // res.setHeader('Access-Control-Allow-Origin', '*');
        // Set CORS headers to allow specific origins
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000, https://devordle-fe.vercel.app',
            'https://devordle-pquu7w52q-4emar.vercel.app/');

        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        // Set Content-Type header
        res.setHeader('Content-Type', 'application/json');

        // Send JSON response
        res.status(200).json({ randomNumber });
    } catch (error) {
        // Handle errors and send an appropriate response
        console.error('Error generating random number:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
