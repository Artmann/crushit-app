import DS from 'ember-data';

export default DS.Model.extend({
  crushIt: DS.attr('boolean'),
  date: DS.attr(),
  agenda: DS.belongsTo('agenda')
});
