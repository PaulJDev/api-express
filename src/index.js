const express = require('express');
require('dotenv').config();
const v1Router = require('./v1/routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_, res) => {
    res.send('Hello World');
})

app.use('/api/v1', v1Router);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


