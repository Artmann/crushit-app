import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    url: DS.attr(),
    order: DS.attr('number')
});