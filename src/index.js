var listStore = require('./stores/listStore');

require('./index.less');

angular.module('todoApp', ['ui.router'])
  .service('listStore', listStore)
  .config(config);

function config($stateProvider, $httpProvider,
  $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(false);

  $stateProvider
    .state('todo', {
      abstract: true,
      url: '/',
      template: '<ui-view />'
    })
    .state('todo.lists', {
      url: '',
      component: 'todoLists'
    })
    .state('todo.all', {
      url: ':id',
      component: 'todo',
      resolve: {
        filter: function () {
          return 'all'
        }
      }
    })
    .state('todo.active', {
      url: ':id/active',
      component: 'todo',
      resolve: {
        filter: function () {
          return 'active'
        }
      }
    })
    .state('todo.completed', {
      url: ':id/completed',
      component: 'todo',
      resolve: {
        filter: function () {
          return 'completed'
        }
      }
    });
}

require('./components');
