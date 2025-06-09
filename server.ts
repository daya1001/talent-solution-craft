
import express from 'express';
import path from 'path';
import serveStatic from 'serve-static';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(serveStatic(path.join(__dirname, 'dist')));

// Handle client-side routing - send all requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});
