const express = require('express');
const fs = require('fs')
const cors = require('cors');
const path = require('path')
const app = express();
app.use(cors())
app.get('/video', (req, res) => {
    res.sendFile('assets/video1.mp4', { root: __dirname });
});

const Videos = require('./routes/Video')
app.use('/videos', Videos)

app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on port {process.env.PORT || 8080}!`);
});
