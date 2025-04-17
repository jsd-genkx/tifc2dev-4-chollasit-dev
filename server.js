const express = require('express');
const app = express();

try {
  process.loadEnvFile();
} catch (error) {
  console.error(error);
}

app.use(express.json());

const PORT = process.env.PORT ?? 3000;

let posts = [];

app.post('/posts', (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = {
      id: posts.length + 1,
      title,
      content,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
  } catch (error) {
    res.sendStatus(400);
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
