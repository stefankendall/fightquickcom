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
    _typeEffectiveness: function (defendingTypes) {
        var effectivenesses = Ember.keys(App.TypeChart).map(function (attackingType) {
            var effectiveness = 1;
            defendingTypes.forEach(function (defendingType) {
                effectiveness *= App.TypeChart[attackingType][defendingType];
            });
            return {
                name: attackingType,
                value: effectiveness
            };
        });
        return _.sortBy(effectivenesses, function (object) {
            return object.name
        });
    }
});