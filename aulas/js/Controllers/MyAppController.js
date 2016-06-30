MyApp
    .controller('CtrlApp', function($scope) {
        $scope.nome = "Leonardo";
        $scope.cidade = "Belo Horizonte";
        $scope.idade = 23;

        // relacionada a diretiva ng-change
        $scope.loggar = function() {
            alert($scope.nome);
        };

        // $watch escuta qualquer alteração feita no elemento ng-model especificado e executa uma função
        $scope.$watch('nome', function() {
            console.log('Oi ' + $scope.nome);
        });
    })
    .controller('CtrlLista', function($scope) {
        $scope.pessoas = [
            {nome: "Maria", cidade: "São Paulo"},
            {nome: "João",  cidade: "Salvador"},
            {nome: "Tico",  cidade: "Curitiba"},
            {nome: "Marta", cidade: "Pirapora"}
        ];

        $scope.adicionar = function() {
            $scope.pessoas.push({
                nome: $scope.vNome,
                cidade: $scope.vCidade
            });

            $scope.vNome = "";
            $scope.vCidade = "";

        };

        $scope.remover = function(index) {
            $scope.pessoas.splice(index, 1);
        };

    })
    .controller('CtrlLista2', function($scope) {
        $scope.pessoas = [
            {nome: "Maria", cidade: "São Paulo"},
            {nome: "João",  cidade: "Salvador"},
            {nome: "Tico",  cidade: "Curitiba"},
            {nome: "Marta", cidade: "Pirapora"}
        ];
    });