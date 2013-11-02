App.PokemonController = Ember.ObjectController.extend({
    superEffectiveTypes: function (a) {
        var effectiveness = this._typeEffectiveness(this.get('model').get('types'));
        return [
            {name: 'psychic', value: 2},
            {name: 'rock', value: 4}
        ];
    }.property('model.types'),
    notEffectiveTypes: function (a) {
        var effectiveness = this._typeEffectiveness(this.get('model').get('types'));
        return [
            {name: 'fire', value: 0.25},
            {name: 'flying', value: 0.5}
        ];
    }.property('model.types'),
    _typeEffectiveness: function (types) {
        return {'fire': 0.25};
    }
});