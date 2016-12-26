var mobx = require('mobx');

var todoContainer = {
  controller: todoContainerController,
  template: require('./todo.html'),
  bindings: {
    filter: '<'
  }
};

function todoContainerController(listStore, $state, $stateParams) {
  var self = this;
  var listId = $stateParams.id;

  var dispose = mobx.autorun(function () {
    var todoList = listStore.getAllTodos(listId);
    self.todoList = getListBasedOnFilter(todoList, self.filter);
    self.incompletedItems = getListBasedOnFilter(todoList, 'active').length;
    console.log('%cNEW STATE:', 'font-weight: bold');
    console.log(JSON.stringify(mobx.toJS(todoList), null, 2));
  });

  self.$onDestroy = function $onDestroy() {
    dispose();
  };

  self.addTodo = function addTodo(event) {
    listStore.addTodo(listId, event.todo);
  };

  self.deleteTodo = function deleteTodo(event) {
    listStore.deleteTodo(listId, event.index);
  };

  self.updateTodo = function updateTodo(event) {
    listStore.updateTodo(listId, event.index, event.todo);
  };

  self.toggleTodo = function toggleTodo(event) {
    listStore.toggleTodo(listId, event.index);
  };

  self.toggleAllTodos = function toggleAllTodos() {
    listStore.toggleAllTodos(listId);
  };

  self.clearCompleted = function clearCompleted() {
    listStore.clearCompleted(listId);
  };

  function getListBasedOnFilter(list, filter) {
    if (!filter) return list;

    var filterMap = {
      all: function (item) { return true; },
      active: function (item) { return !item.completed },
      completed: function (item) { return item.completed }
    };

    return list.filter(filterMap[filter]);
  }
}

module.exports = todoContainer;
