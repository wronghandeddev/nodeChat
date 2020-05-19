// @ts-nocheck
const path = require('path');
const express = require('express');
//const nodemon = requireDev('nodemon');
const app = express()

const port = process.env.PORT || 8990;
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))
    console.log('server is up on port ${port}')

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})


