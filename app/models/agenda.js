import DS from 'ember-data';

export default DS.Model.extend({
  items: DS.hasMany('item', { async: true }),

  todaysAgenda: Ember.computed('items.[]', function() {
    let today = new Date().toISOString().slice(0,10);
    let items = this.get('items').filterBy('date', today);
    return items.get('firstObject')
  }),

  currentStreak: Ember.computed('items.[]', function() {
    let items = this.get('items').filterBy('crushIt', true);
    return items.get('length');
  })
});
