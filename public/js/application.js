window.App = Ember.Application.create();

App.ApplicationController = Em.Controller.extend({
    items: [],
    init: function () {
        this.items = window.FIXTURES;
    }
});