import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import 'dotenv/config';
import router from './src/router/analyzeRouter.js';

const app = express();
app.use(json());

const port = process.env.PORT || 5000;

app.use('/analyze', router);

app.listen(port, async () => {
  console.log('Server listening on port ' + port);
});

export default app;