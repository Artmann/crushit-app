import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  title: faker.lorem.sentence,
  url: faker.internet.url,
  order: () => {
    return Math.random() * 100;
  }
});
