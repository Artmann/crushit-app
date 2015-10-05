export default function(server) {
  server.create('item', { date: '2015-10-03' });
  server.create('item', { date: '2015-10-04' });
  server.create('item', { date: '2015-10-02' });

  server.createList('article', 20);
  server.createList('quote', 20);
}
