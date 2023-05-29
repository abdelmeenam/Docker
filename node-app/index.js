const express = require('express');

// init app
const app = express();
const PORT = 2000;


// init routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World from </h1>');
});
// init server



// listen on port 3000
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

