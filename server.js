const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send("yeah baby we're workin")
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})
