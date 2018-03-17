import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return{
      people: [
        {
          id: '1',
          name: 'Cristian',
          gender: 'M',
          salary: 13300000,
        },
        {
          id: '2',
          name: 'Melissa',
        gender: 'F',
        salary: 56500000,
        },
        {
          id: '3',
          name: 'Juan',
          gender: 'M',
          salary: 4400000,
        },
        {
          id: '4',
          name: 'Robin',
          gender: 'M',
          salary: 14400000,
        },
        {
          id: '5',
          name: 'Veronica',
          gender: 'F',
          salary: 23500000,
        },
        {
          id: '6',
          name: 'Isabel',
          gender: 'F',
          salary: 12500000,
        },
      ],
    };
  },
});
