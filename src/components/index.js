var todoContainer = require('./containers/todo');
var todoListsContainer = require('./containers/todo-lists');
var listForm = require('./list-form');
var listItem = require('./list-item');
var todoForm = require('./todo-form');
var todoList = require('./todo-list');
var todoItem = require('./todo-item');
var todoFooter = require('./todo-footer');

angular.module('todoApp')
  .component('todo', todoContainer)
  .component('todoLists', todoListsContainer)
  .component('listForm', listForm)
  .component('listItem', listItem)
  .component('todoForm', todoForm)
  .component('todoList', todoList)
  .component('todoItem', todoItem)
  .component('todoFooter', todoFooter);
