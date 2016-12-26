var todoFooter = {
  controller: todoFooterController,
  template: require('./todo-footer.html'),
  bindings: {
    itemsLeft: '<',
    onClearCompleted: '&'
  }
};

function todoFooterController($stateParams) {
  var self = this;
  this.listId = $stateParams.id;

  self.clearCompleted = function clearCompleted() {
    // Call parent
    self.onClearCompleted();
  };
}

module.exports = todoFooter;
