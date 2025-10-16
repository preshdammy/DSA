import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Everyone its me!!!');
});

const PORT = 3003;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
