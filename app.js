
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Create a rate limiter middleware
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 20, // Limit to 20 requests per minute
  message: 'Too many requests, please try again later.',
});

// Apply the rate limiter middleware to a specific route
app.use('/items', limiter);


app.get('/items', (req, res) => {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];

  res.json({ message: 'This is the protected resource.', data: data });
});

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
