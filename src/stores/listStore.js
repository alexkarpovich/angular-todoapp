var mobx = require('mobx');

function listStore() {
  var store = this;
  var todoLists = mobx.observable([]);

  store.getAllLists = function getAllLists() {
    return todoLists;
  };

  store.addList = function addList(list) {
    var newList = Object.assign({}, list, {todos: []});

    todoLists.push(newList);
  };

  store.updateList = function updateList(index, list) {
    todoLists[index].name = list.name;
  };

  store.deleteList = function deleteList(index) {
    todoLists.splice(index, 1)
  };

  store.getAllTodos = function getAllTodos(listId) {
    return todoLists[listId].todos;
  };

  store.addTodo = function addTodo(listId, todo) {
    var newTodo = Object.assign({}, todo, {
      completed: false
    });

    todoLists[listId].todos.push(newTodo);
  };

  store.deleteTodo = function deleteTodo(listId, index) {
    todoLists[listId].todos.splice(index, 1);
  };

  store.updateTodo = function updateTodo(listId, index, todo) {
    todoLists[listId].todos[index].description = todo.description;
  };

  store.toggleTodo = function toggleTodo(listId, index) {
    todoLists[listId].todos[index].completed = !todoLists[listId].todos.completed;
  };

  store.toggleAllTodos = function toggleAllTodos(listId) {
    todoLists[listId].todos.forEach(function(item) {
      item.completed = !item.completed;
    });
  };

  store.clearCompleted = function clearCompleted(listId) {
    var filteredArray = todoLists[listId].todos.filter(function(item) {
      return !item.completed;
    });

    todoLists[listId].todos.replace(filteredArray);
  };
}

module.exports = listStore;
