App.Pokemon = DS.Model.extend({
    name: DS.attr('string'),
    types: DS.attr('array')
});

App.Pokemon.FIXTURES = [
    {id: 1, name: "Charizard", types: ['fire', 'flying']},
    {id: 2, name: "Charizard", types: ['fire', 'flying']}
];