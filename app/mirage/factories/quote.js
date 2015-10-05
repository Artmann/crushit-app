import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  text: faker.lorem.paragraph,
  order: () => {
    return Math.random() * 100;
  }
});
