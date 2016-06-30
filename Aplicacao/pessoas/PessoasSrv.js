/*
métodos do resource:
 { 'get':    {method:'GET'}, // pegar os dados
 'save':   {method:'POST'}, // adicionar dados
 'query':  {method:'GET', isArray:true},
 'remove': {method:'DELETE'}, // deletar dados
 'delete': {method:'DELETE'} };
 PUT para alterar dados
* */

pessoas
    // factory cria o objeto PessoasSrv, $resourve vem da dependência ngResource e serve para fazer comunicação via REST pelo javascript vom HTTP
    .factory('PessoasSrv', function($resource) {
       return $resource(
           '/index.php/pessoas/:id', {
               id: '@id' // @id -> :id da rota
           },
           {
               update: {
                   method: 'PUT',
                   url: '/index.php/pessoas/:id'
               }
           }
       );
    });