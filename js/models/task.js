Tasks.Task = DS.Model.extend({
  title: DS.attr('string'),
  note: DS.attr('string'),
  isDone: DS.attr('boolean')
});

Tasks.Task.FIXTURES = [
 {
   id: 1,
   title: 'Bring Kids To Shcool',
   note: 'Bring kids to school on Monday',
   isDone: true
 },
 {
   id: 2,
   title: 'Business Meeting',
   note: 'Business meeting with my company at 3pm on Wed',
   isDone: false
 },
 {
   id: 3,
   title: 'Dinner With Parents',
   note: 'Go to the 99 with my wife and parents',
   isDone: false
 }
];