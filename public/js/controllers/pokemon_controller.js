App.PokemonController = Ember.ObjectController.extend({
    superEffectiveTypes: function (a) {
        var effectiveness = this._typeEffectiveness(this.get('model').get('types'));
        return effectiveness.filter(function (value) {
            return value.value > 1;
        });
    }.property('model.types'),
    notEffectiveTypes: function (a) {
        var effectiveness = this._typeEffectiveness(this.get('model').get('types'));
        return effectiveness.filter(function (value) {
            return value.value < 1;
        });
    }.property('model.types'),
    _typeEffectiveness: function (types) {
        return [
            {name: 'fire', value: 0.25},
            {name: 'water', value: 2}
        ];
    }
});