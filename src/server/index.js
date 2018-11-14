'use strict';

const express = require('express');
const os = require('os');
const PORT = 8000;
const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));