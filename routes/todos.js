const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

let allTodos = [
  { id: 1, task: "go to school", category: "school", complete: false },
  { id: 2, task: "go to work", category: "work", complete: false },
  { id: 3, task: "go to dentist", category: "health", complete: false },
  { id: 4, task: "do homework", category: "school", complete: false },
  { id: 5, task: "go to gym", category: "health", complete: false },
];

// Get - get all tasks
router.get("/", (req, res) => {
  res.status(200).json(allTodos);
});

// Get - get tasks by Category
router.get("/:taskCat", (req, res) => {
  const { taskCat } = req.params;
  const findTask = allTodos.filter((item) => {
    return item.category === taskCat;
  });
  if (findTask) {
    res.status(200).json(findTask);
  }
  if (!findTask) {
    res.status(404).json("No category/task found.");
  }
});

// POST - add new task
router.post("/", (req, res) => {
  let newId = allTodos.length + Math.floor(Math.random() * 258);

  const { id, task, category, complete } = req.body;

  const taskExists = allTodos.find((item) => item.task === task);
  if (taskExists) return res.send("Task already exists.");

  const newTask = {
    id: newId,
    task,
    category,
    complete: false
  };

  allTodos.push(newTask);
  res.send(newTask);
});

// PUT - update tasks (working- with help from youtube tutorial)
router.put("/:taskId", async (req, res) => {
  const { taskId } = req.params;

  let newId = allTodos.length + Math.floor(Math.random() * 258);

  const { id, task, category, complete } = req.body;

  const editTask = allTodos.find((item) => item.task === taskId);
  if (!editTask) return res.send("task does not exist");

  // check that val is present, if not use prev. if new val use new.
  const updatedField = (val, prev) => (!val ? prev : val);

  const updatedTask = {
    ...editTask,
    id: newId,
    task: updatedField(task, editTask.task),
    category: updatedField(category, editTask.category),
    complete: updatedField(complete, editTask.complete),
  };

  const taskIndex = allTodos.findIndex((item) => item.id === taskId);
  allTodos.splice(taskIndex, 1, updatedTask);
  res.send(updatedTask);
});

// DELETE - delete task
router.delete("/:taskId", (req, res) => {
  const { taskId } = req.params;

  let removeTask = allTodos.find((item) => item.task === taskId);
  if (!removeTask) return res.status(404).send("Task does not exist.");

  allTodos = allTodos.filter((item) => item.task !== taskId);
  res.send("Success");
});

module.exports = router;