import Ember from 'ember';

var Router = Ember.Router.extend({
  location: HasManyTestENV.locationType
});

Router.map(function() {
  this.resource('will', { path: '/will/:will_id' });
  this.resource('file', { path: '/file/:file_id' });
});

export default Router;
