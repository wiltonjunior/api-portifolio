'use strict';

require('domain').config();

const express = require('express');

const app = express();

app.listen(process.env.PORT, () => {
console.log('App listening port 3000')
})

