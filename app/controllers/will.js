import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    createFile: function() {
      var _this = this;
      var newFile = this.store.createRecord("file", {
        name: "testname"
      });

      newFile.save().then(function(response) {
        var will = _this.get('model');
        will.get('files').pushObject(response);

        // adding the serializer here seems to make this save include the files as ids in the POST
        will.save();
      });
    }
  }
});
