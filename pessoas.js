angular.module('pessoas', ['ngRoute']) // definição do módulo
    // definição de configuração do angular, incluindo o provedor de rotas do angularJS
    .config(function($routeProvider) {
        // when são as configurações de cada rota
        $routeProvider
            .when('/', {
                templateUrl: 'listar.html'
            })
            .when('/pessoa/adicionar', {
                templateUrl: 'adicionar.html',
                controller: 'CtrlAdicionar' // altera o controller a ser trabalhado para essa rota
            })
            .when('/pessoa/:index', { // passando parâmetro para a rota
                templateUrl: 'editar.html',
                controller: 'CtrlEditar'
            });
    })
    .controller('CtrlPessoas', ['$scope', function(scope) {
        scope.pessoas = [
            {nome: "Maria",  cidade: "Sao Paulo"},
            {nome: "Pedro",  cidade: "Salvador"},
            {nome: "Joao",   cidade: "Parnaiba"},
            {nome: "Cleber", cidade: "Barueri"}
        ];

        scope.remover = function(index) {
            scope.pessoas.splice(index, 1);
        };

    }])
    .controller('CtrlAdicionar', ['$scope', function(scope) {
        scope.add = function() {
            scope.pessoas.push(scope.pessoa);

            scope.pessoa = {};
            scope.result = "Registro adicionado com sucesso";
        };
    }])
    .controller('CtrlEditar', ['$scope', '$routeParams', function(scope, params) {
        scope.pessoa = scope.pessoas[params.index];
    }]);