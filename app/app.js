var myNinjaApp = angular.module('myNinjaAppName', [])

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    $scope.message = "hey y'all";

    $scope.ninjas = [
        {
            name: "Yoshi",
            belt: "green",
            rate: 35,
            available: false
        },
        {
            name: "Cristal",
            belt: "red",
            rate: 400,
            available: true
        },
        {
            name: "Ryu",
            belt: "black",
            rate: 500,
            available: true
        },
        {
            name: "Shaun",
            belt: "blue",
            rate: 25,
            available: true
        },
        {
            name: "Sukiro",
            belt: "yellow",
            rate: 15,
            available: false
        },
        {
            name: "Karioshi",
            belt: "white",
            rate: 50,
            available: true
        }
    ];

}]);
