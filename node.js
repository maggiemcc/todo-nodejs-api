const express = require('express');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todos');
const categoriesRoutes = require('./routes/categories');
const port = 5000
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/todos', todoRoutes);
app.use('/categories', categoriesRoutes);

// main branch
app.get('/', (req, res) => {
    res.json({message: 'todo app nodejs api'});
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})