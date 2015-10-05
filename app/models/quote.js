import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  order: DS.attr('number')
});
