(function (){
    var app = angular.module('helloworld',[]);
    app.directive('hello', function(){
        return({
            restrict: 'E',
            template: '<div>Hello World!</div>',
            replace: true
        });
    });
})();
