App.PokeViewComponent = Ember.Component.extend({
    pokemon: null,
    name: function () {
        return this.get('pokemon.name');
    }.property(),
    superEffectiveTypes: function () {
        var effectiveness = this._typeEffectiveness(this.get('pokemon.types'));
        return effectiveness.filter(function (value) {
            return value.value > 1;
        });
    }.property('pokemon.types'),
    notEffectiveTypes: function (types) {
        var effectiveness = this._typeEffectiveness(this.get('pokemon.types'));
        return effectiveness.filter(function (value) {
            return value.value < 1;
        });
    }.property('pokemon.types'),
    _typeEffectiveness: function (defendingTypes) {
        var effectivenesses = Ember.keys(window.TypeChart).map(function (attackingType) {
            var effectiveness = 1;
            defendingTypes.forEach(function (defendingType) {
                effectiveness *= window.TypeChart[attackingType][defendingType];
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