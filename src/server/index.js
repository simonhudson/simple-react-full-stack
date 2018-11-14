'use strict';

const express = require('express');
const os = require('os');
const PORT = 8000;
const app = express();

app.use(express.static('dist'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));