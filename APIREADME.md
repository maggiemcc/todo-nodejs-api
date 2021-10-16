# TODOS
* Located in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)

## 1- GET TODOS:
- GET all todos: at line 15 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
     * Gets and displays every todo item in the original allTodos object array.

- GET all todos by category: at line 20 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
     * Gets and displays every todo item associated with a specific category using array.filter.
   

## 2- POST TODOS:
- POST/Add new todos: at line 34 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
     * Creates a new task by taking user input for req.body and pushing it to the array if the task doesn't already exist based on array.find.

## 3- PUT TODOS:
- PUT/update todos: at line 54 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
    * Updates/edits a current todo task and changes it's values based on user input usind array.find to find the task and array.splice to remove and replace it with updated task values. Any changes will be displayed, otherwise it will take the prev value if left empty/unchanged.

## 4- DELETE TODOS:
- DELETE todos: at line 81 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
    * Looks for task name given and then deletes that task. If task name isn't found it will return an error message.


# CATEGORIES
* [Categories Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/categories.js)
## 5- GET ALL TODOS BY CATEGORY:
    - Gets and displays only todos assigned to a specific category.

## 6- GET CATEGORIES:
 - Getting and displaying every category item in the original allCategories object array.

## 7- POST CATEGORIES:
    - Creates/adds new category (unless it already exists).

## 8- PUT CATEGORIES:
    - Updates/editing a current category given any change made be user. Any changes will be displayed, otherwise it will take the prev value if left empty/unchanged.

## 9- DELETE CATEGORIES:
    - Looks for given category name and then deletes that category.