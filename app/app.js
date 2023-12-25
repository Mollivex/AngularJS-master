var myNinjaApp = angular.module('myNinjaAppName', [])

myNinjaApp.controller('NinjaController', ['$scope', 'dependency',function($scope,$dependency){

    $scope.message = "hey y'all";

    $scope.ninjas = ['yoshi', 'cristal', 'ryu', 'shaun', 'sukiro', 'karioshi'];

}]);
