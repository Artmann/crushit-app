import Ember from 'ember';

export default Ember.Controller.extend({
  agenda: Ember.computed.alias('model.agenda'),
  articles: Ember.computed.alias('model.articles'),
  quotes: Ember.computed.alias('model.quotes'),
  isStreak: Ember.computed.gte('agenda.currentStreak', 3),
  isEvening: Ember.computed(function() {
    let now = new Date();
    let hours = parseInt(now.getHours(), 10);
    return (hours >= 16);
  }),
  showButtons: Ember.computed('isEvening', 'agenda.todaysAgenda', function() {
    return (this.get('isEvening') && Ember.isNone(this.get('agenda.todaysAgenda')));
  }),
  quote: Ember.computed('quotes', function() {
    let quotes = this.get('quotes').sortBy('order');
    return quotes.get('firstObject');
  }),
  sortedArticles: Ember.computed('articles.[]', function() {
    let articles = this.get('articles');
    return articles.sortBy('order').slice(0,5);
  })

});
