const express = require('express');
const apis = require('./apis');

const app = express();

const PORT = process.env.PORT || 3095;
app.set('port', PORT);

app.use('/', apis);

app.listen(PORT, () => {
    console.log('Server Port: ', PORT);
});
