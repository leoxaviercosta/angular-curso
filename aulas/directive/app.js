angular.module('App', [])
    // criando diretivas, obrigatoriamente retorna um objeto
    .directive('sonClick', function() {
        /* retorna objeto com parâmetros
        * 'restrict': restrição da diretiva 'A' é atributo e 'E' é elemento e 'AE'
        * 'link': trabalha com o comportamento da diretiva recebendo 3 parâmetros padrões
        * */
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                // bind relaciona um evento ao elemento
                element.bind('click', function() {
                    scope.$eval(attrs.sonClick); // eval para executar script e o nome do atributo
                })
            }
        }
    })
    .directive('sonClickelement', function() {
        /* retorna objeto com parâmetros
         * 'restrict': restrição da diretiva 'A' é atributo e 'E' é elemento e 'AE'
         * 'link': trabalha com o comportamento da diretiva recebendo 3 parâmetros padrões
         * */
        return {
            restrict: 'E',
            replace: true, // subtitui o valor no tamplate pelo valor do elemento html
            transclude: true, // pega o valor do elemento e colocar como valor no tamplete e informa no template onde o valor será inserido
            template: '<button ng-transclude></button>',
            link: function(scope, element, attrs) {
                // bind relaciona um evento ao elemento
                element.bind('click', function() {
                    scope.$eval(attrs.click); // eval para executar script e o nome do atributo
                })
            }
        }
    })
    .controller('CtrlApp', ['$scope', function(scope) {
        scope.executa = function() {
            alert('diretive clicar');
        }
    }]);