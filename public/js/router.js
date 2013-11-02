App.Router.map(function () {
    this.resource('pokemons', {path: '/'});
});

App.PokemonsRoute = Ember.Route.extend({
   model: function(){
       return this.store.find('pokemon');
   }
});