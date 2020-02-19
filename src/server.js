import app from './app';

const PORT = process.env.PORT || 3333;

app.listen(
  PORT,
  console.log(`Server is runing at ${process.env.APP_URL}:${PORT}/`)
);
