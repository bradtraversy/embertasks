window.Tasks = Ember.Application.create();

//Test Data Fixture
//Tasks.ApplicationAdapter = DS.FixtureAdapter.extend();

Tasks.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'tasks_emberjs'
});