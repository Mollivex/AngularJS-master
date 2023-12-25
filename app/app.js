var myNinjaApp = angular.module('myNinjaAppName', [])

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    $scope.message = "hey y'all";

    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "green",
            rate: 35
        },
        {
            name: "Cristal",
            belt: "red",
            rate: 400
        },
        {
            name: "Ryu",
            belt: "black",
            rate: 500
            
        },
        {
            name: "Shaun",
            belt: "blue",
            rate: 25
        },
        {
            name: "Sukiro",
            belt: "yellow",
            rate: 15
        },
        {
            name: "Karioshi",
            belt: "white",
            rate: 50
        }
    ];

}]);
