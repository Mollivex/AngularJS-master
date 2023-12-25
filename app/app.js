var myNinjaApp = angular.module('myNinjaAppName', [])

myNinjaApp.controller('NinjaController', ['$scope', function($scope){

    $scope.removeNinja = function(ninja){
        var removedNinja = $scope.ninjas.indexOf(ninja)
        $scope.ninjas.splice(removedNinja, 1)
    };

    $scope.addNinja = function(){
        $scope.ninjas.push({
            name: $scope.newninja.name,
            belt: $scope.newninja.belt,
            rate: parseInt($scope.newninja.rate),
            available: true
        });

        $scope.newninja.name = "";
        $scope.newninja.belt = "";
        $scope.newninja.rate = "";
    };

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
            belt: "green",
            rate: 50,
            available: true
        }
    ];

}]);
