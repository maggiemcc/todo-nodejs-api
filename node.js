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

// let allTodos = [
//     { id: 1, task: "go to school", category: "school", complete: false},
//     { id: 2, task: "go to work", category: "work", complete: false},
//     { id: 3, task: "go to dentist", category: "health", complete: false},
//     { id: 4, task: "do homework", category: "school", complete: false},
//     { id: 5, task: "go to gym", category: "health", complete: false},
//   ];
  

// main branch
app.get('/', (req, res) => {
    res.json({message: 'todo app nodejs api'});
})


// Get - get tasks by ID
// app.get('/todos/:taskId', (req, res) => {
//     let found = allTodos.find((item) => {
//         return item.id === parseInt(req.params.taskId);
//       });
    
//       if (found) {
//         res.status(200).json(found);
//       } else {
//         res.status(404).json('Task does not exist');
//       }
// });


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})