export default function() {
  this.namespace = "/api";

  this.get('/agendas/:id', (db, resp) => {
    return {
      agenda: {
        id: 1,
        items: [1]
      },
      items: db.items
    };
  });

  this.post('/items');
  this.get('/articles');
  this.get('/quotes');
}
