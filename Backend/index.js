import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import router from './src/router/analyzeRouter.js';

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: "*",
  methods: "GET, POST, PUT, DELETE, PATCH",
}));

const port = process.env.PORT || 5000;

app.use('/analyze', router);

app.listen(port, async () => {
  console.log('Server listening on port ' + port);
});

export default app;