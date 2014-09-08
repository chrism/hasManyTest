import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  will: DS.belongsTo('will', {async: true})
});
