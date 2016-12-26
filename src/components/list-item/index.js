var listItem = {
  controller: listItemController,
  template: require('./list-item.html'),
  bindings: {
    index: '<',
    name: '<',
    onDelete: '&',
    onUpdate: '&'
  }
};

function listItemController() {
  var self = this;

  self.$onInit = function $onInit() {
    self.editing = false;
  };

  self.enableEditing = function enableEditing() {
    self.editing = true;
  };

  self.deleteList = function deleteList() {
    // Call parent
    self.onDelete({
      $event: {
        index: self.index
      }
    });
  };

  self.updateList = function updateList() {
    // Call parent
    self.onUpdate({
      $event: {
        index: self.index,
        list: {
          name: self.name
        }
      }
    });

    self.editing = false;
  };
}

module.exports = listItem;
