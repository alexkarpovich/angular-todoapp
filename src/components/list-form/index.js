var listForm = {
  controller: listFormController,
  template: require('./list-form.html'),
  bindings: {
    onSubmit: '&'
  }
};

function listFormController() {
  var self = this;

  self.$onInit = function $onInit() {
    self.newList = {};
    resetList();
  };

  self.submitForm = function submitForm() {
    // Call parent
    self.onSubmit({
      $event: {
        list: self.newList
      }
    });

    resetList();
  };

  function resetList() {
    self.newList = {};
  }
}

module.exports = listForm;
