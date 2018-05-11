(function (){
    var app = angular.module('helloworld',[]);
    app.controller('bookCrtl', ['$scope', function($scope){
        $scope.click = function() {
            
        }
    }]);
    app.directive('hello', function(){
        

        return({
            restrict: 'E',
            template: '<div>Hello World!</div>',
            replace: true
        });
    });
})();
