var mobx = require('mobx');

var todoListsContainer = {
  controller: todoListsContainerController,
  template: require('./todo-lists.html'),
  bindings: {
    filter: '<'
  }
};

function todoListsContainerController(listStore, $state) {
  var self = this;

  var dispose = mobx.autorun(function () {
    var todoLists = listStore.getAllLists();
    self.todoLists = getListBasedOnFilter(todoLists, self.filter);
  });

  self.$onDestroy = function $onDestroy() {
    dispose();
  };

  self.addList = function addList(event) {
    listStore.addList(event.list);
  };

  self.deleteList = function deleteList(event) {
    listStore.deleteList(event.index);
  };

  self.updateList = function updateList(event) {
    listStore.updateList(event.index, event.list);
  };

  self.toggleList = function toggleList(event) {
    listStore.toggleList(event.index);
  };

  self.toggleAllLists = function toggleAllLists() {
    listStore.toggleAllLists();
  };

  self.clearCompleted = function clearCompleted() {
    listStore.clearCompleted();
  };

  function getListBasedOnFilter(list, filter) {
    return list;
  }
}

module.exports = todoListsContainer;
