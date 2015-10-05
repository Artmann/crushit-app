import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      agenda: this.store.findRecord('agenda', 1),
      articles: this.store.findAll('article'),
      quotes: this.store.findAll('quote')
    });
  },

  actions: {
    didCrushIt(crushedIt) {
      let agenda = this.modelFor(this.routeName).agenda;
      let item = agenda.get('todaysAgenda');
      if(Ember.isNone(item)) {
        let today = new Date().toISOString().slice(0,10);
        item = this.store.createRecord('item', {
          agenda: agenda,
          date: today
        });
      }
      item.set('crushIt', crushedIt);
      item.save();
    }
  }

});
