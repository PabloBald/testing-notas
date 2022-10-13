const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const notesRouter = require('./routes/notes.router');

app.use(express.json());
app.use('/',notesRouter);

app.listen(port,()=> {
    console.log(`Listen at http://localhost:${port}`);
})

module.exports = app;