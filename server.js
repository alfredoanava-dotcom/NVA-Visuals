// NVA Visuals — minimal Express static file server
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in the /public directory (index.html, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Fallback: send the homepage for any unmatched route
// (so refreshes and deep links always load the site)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NVA Visuals is running at http://localhost:${PORT}`);
});
