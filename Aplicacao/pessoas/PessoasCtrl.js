pessoas
    .controller('PessoasCtrl',
        ['$scope', 'PessoasSrv', '$location', '$routeParams',
            function(scope, PessoasSrv, $location, $routeParams) {

                // carrega os dados de pessoas
                scope.load = function() {
                    scope.registros = PessoasSrv.query();
                };

                // limpa os campos
                scope.clear = function() {
                    scope.item = {};
                };

                // busca um registro
                scope.get = function() {
                    scope.item = PessoasSrv.get({id: $routeParams.id})
                };

                // adicionar uma pessoa
                scope.add = function(item) {
                    scope.result = PessoasSrv.save(
                        {},
                        $jQuery.param(item), // passa o dataset e com jquey tranforma o dataset em formato de parâmetros
                        // função de callback de sucesso
                        function(data, status, headers, config) {
                            $location.path('/'); // location redireciona para nova rota
                        },
                        // função de callback de falha
                        function(data, status, headers, config) {
                            alert('Ocorreu um erro: ' + data.messages[0]);
                        }
                    );
                };

                // editar uma pessoa
                scope.editar = function(item) {
                    // para PUT deve-se tranformar o dataset para Json
                    var params = $jQuery.param(JSON.parse(angular.toJson(item)));

                    scope.result = PessoasSrv.update(
                        {id: $routeParams.id},
                        params,
                        function(data, status, headers, config) {
                            $location.path('/');
                        },
                        function(data, status, headers, config) {
                            alert('Ocorreu um erro: '+data.messages[0]);
                        }
                    );
                };

                // excluir uma pessoa
                scope.delete = function(id) {
                    if(confirm('Deseja realmente excluir essa pessoa?')) {
                        PessoasSrv.remove(
                            {id: id},
                            {},
                            function(data, status, headers, config) {
                                scope.load();
                            },
                            function(data, status, headers, config) {
                                alert('Ocorreu um erro: '+data.messages[0]);
                            }
                        )
                    } else {
                        scope.load();
                    }
                };

            }
        ]
    );