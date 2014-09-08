import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  files: DS.hasMany('file', {async: true})
});
