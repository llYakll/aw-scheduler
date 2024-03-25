const express = require('express');
const app = express();
const PORT = 3000;

//ROUTES--------------------------------------------

app.get('/', (req, res) => {
    res.send('hello world!');
});

//START SERVER------------------------------------------
app.listen(PORT, () => {
        console.log(`Server has started, listening on http:localhost:${PORT}`);
});