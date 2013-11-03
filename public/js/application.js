window.App = Ember.Application.create();

App.ApplicationController = Em.ArrayController.extend({
    pokemon: window.POKEMON
});