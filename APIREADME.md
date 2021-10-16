# TODOS
* Located in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)

## 1- GET TODOS:
- GET all todos: at line 15 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
     * Gets and displays every todo item in the original allTodos object array.
     * EX: POSTMAN using "GET":
     - https://localhost5000/todos

- GET all todos by category: at line 20 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
     * Gets and displays every todo item associated with a specific category using array.filter.
     * EX: POSTMAN using "GET":
     - https://localhost5000/todos/school
   

## 2- POST TODOS:
- POST/Add new todos: at line 34 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
     * Creates a new task by taking user input for req.body and pushing it to the object array if the task doesn't already exist based on array.find.
     * EX: POSTMAN using "POST": in postman body, using raw, type na ew task to be added using POST:
        - https://localhost5000/todos/
        {
            "id": 6,
            "task": "sleep",
            "category": "school",
            "complete": false
        }



## 3- PUT TODOS:
- PUT/update todos: at line 54 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
    * Updates/edits a current todo task and changes it's values based on user input using array.find to find the task and then use array.splice to remove the original and replace it with updated task values. Any changes will be displayed, otherwise it will take the prev value if left empty/unchanged.

## 4- DELETE TODOS:
- DELETE todos: at line 81 in [Todos Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/todos.js)
    * Looks for task name given using array.find, if task is found the array.filter is used to remove the task from the main object array. Else, if task isn't found it will return an error message.

## 5- GET ALL TODOS BY CATEGORY:
- Gets and displays only todos assigned to a specific category.

# CATEGORIES
* [Categories Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/categories.js)

## 6- GET CATEGORIES:
- GET all categories: at line 17 in [Categories Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/categories.js)
     * Gets and displays every category avaiable in the original allCategories object array.

- GET categories by id: at line 22 in [Categories Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/categories.js)
     * Gets and displays a category based on it's id using array.find. Else, it returns an error message.


## 7- POST CATEGORIES:
- POST/Add new todos: at line 35 in [Categories Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/categories.js)
     * Creates a new category by taking user input for req.body and pushing it to the object array if the category doesn't already exist based on array.find.

## 8- PUT CATEGORIES:
- PUT/update todos: at line 64 in [Categories Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/categories.js)
    * Updates/edits a current category info by changing it's values based on user input gathered by req.body and then using array.find to find the associated category and then use array.splice to remove the original and replace it with updated category values. Any changes will be displayed, otherwise it will take the prev value if left empty/unchanged.

## 9- DELETE CATEGORIES:
- DELETE category: at line 87 in [Categories Route](https://github.com/maggiemcc/todo-nodejs-api/blob/master/routes/categories.js)
    * Looks for category name given using array.find, if task is found the array.filter is used to remove the task from the main object array. Else, if task isn't found it will return an error message.