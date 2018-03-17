import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    //digo que me traiga del modelo la variable people que contiene las personas
    const people = this.modelFor('people').people;
    const person = people.findBy('id', id);
    if (!person) {
      this.transitionTo('people');
    } else {
      return {
        name: person.name,
        title: person.isFemale ? 'Miss.' : 'Mr.',
        salary: person.salary,
        gender: person.gender,
      };
    }
  }
});
