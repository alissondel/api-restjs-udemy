import app from './app';

const port = process.env.APP_PORT;
console.log(`http://localhost:${port}`);
app.listen(port);
