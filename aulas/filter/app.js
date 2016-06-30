angular.module('App', [])
    // definindo filtros
    .filter('upper', function() {
        return function(input) {
            return input.toUpperCase();
        }
    })
    .filter('lower', function() {
        return function(input) {
            return input.toLowerCase();
        }
    })
    .filter('case', function() {
        return function(input, param) {
            if (param === 'upper')
                return input.toUpperCase();
            else
                return input.toLowerCase();
        }
    })
    .controller('CtrlApp', ['$scope', function(scope) {
        scope.frase = "Olá, meu nome é Leonardo";
    }]);