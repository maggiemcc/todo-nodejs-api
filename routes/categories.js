const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
router.use(bodyParser.json());

let allCategories = [
  { id: 1, category: "work" },
  { id: 2, category: "school" },
  { id: 3, category: "health" },
];

// GET - get all categories
router.get("/", (req, res) => {
  res.status(200).json(allCategories);
});

// Get - get tasks by name
router.get("/:taskCat", (req, res) => {
  const { taskCat } = req.params;
  const findTask = allCategories.filter((item) => {
    return item.category === taskCat;
  });
  if (findTask) {
    res.status(200).json(findTask);
  }
  if (!findTask) {
    res.status(404).json("No category/task found.");
  }
});

// POST - add new category
router.post("/", (req, res) => {
  const { id, category } = req.body;

  const catExists = allCategories.find((item) => item.category === category);
  if (catExists) return res.send("Category already exists.");

  let newId = allCategories.length + Math.floor(Math.random() * 258);

  const newCat = {
    id: newId,
    category,
  };

  allCategories.push(newCat);
  res.send(newCat);
});


// PUT - update category
router.put("/:catId", async (req, res) => {
  const { catId } = req.params;

  let newId = allCategories.length + Math.floor(Math.random() * 258);

  const { id, category } = req.body;

  const editTask = allCategories.find((item) => item.category === catId);
  if (!editTask) return res.send("task does not exist");

  // check that val is present, if not use prev. if new val use new.
  const updatedField = (val, prev) => (!val ? prev : val);

  const updatedTask = {
    ...editTask,
    id: newId,
    category: updatedField(category, editTask.category),
  };

  const taskIndex = allCategories.findIndex((item) => item.category === catId);
  allCategories.splice(taskIndex, 1, updatedTask);
  res.send(updatedTask);
});

// DELETE - delete categories
router.delete("/:catId", (req, res) => {
  const { catId } = req.params;

  let removeCat = allCategories.find((item) => item.category === catId);
  if (!removeCat) return res.status(404).send("Category does not exist.");

  allCategories = allCategories.filter((item) => item.category !== catId);
  res.send("Success");
});

module.exports = router;
