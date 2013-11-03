window.App = Ember.Application.create();

App.ApplicationController = Em.Controller.extend({
    items: [],
    init: function () {
        this.items = window.FIXTURES;
    }
});

Em.Handlebars.registerBoundHelper('eachPokemon', function (items) {
    return (
        new Handlebars.SafeString(
            items.map(function (i) {
                return '<span>' + JSON.stringify(i) + '</span>';
            })
        )
        );
});