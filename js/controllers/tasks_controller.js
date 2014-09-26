Tasks.TasksController = Ember.ArrayController.extend({
  actions: {
    createTask: function () {
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      var note = this.get('newNote');
      if (!note.trim()) { return; }

      // Create noew task model
      var task = this.store.createRecord('task', {
        title: title,
        note: note,
        isDone: false
      });

      //Clear fields
      this.set('newTitle', '');
      this.set('newNote', '');

      task.save();
    }
  },

  remaining: function () {
    return this.filterBy('isDone', false).get('length');
  }.property('@each.isDone'),

  inflection: function () {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'Task' : 'Tasks';
  }.property('remaining'),
});