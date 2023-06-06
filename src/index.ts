import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const PORT: string = process.env.PORT || '3001';

app.get('/', (res, req) => {
  req.json({
    user: 'vo manh quan'
  });
});

app.listen(PORT, () => {
  console.log('server');
});
