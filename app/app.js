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
            available: true,
            thumb: "content/images/ninja1.png"
        },
        {
            name: "Cristal",
            belt: "red",
            rate: 400,
            available: true,
            thumb: "content/images/ninja2.png"
        },
        {
            name: "Ryu",
            belt: "black",
            rate: 500,
            available: true,
            thumb: "content/images/ninja3.png"
        },
        {
            name: "Shaun",
            belt: "blue",
            rate: 25,
            available: true,
            thumb: "content/images/ninja4.png"
        },
        {
            name: "Sekiro",
            belt: "purple",
            rate: 15,
            available: true,
            thumb: "content/images/ninja5.png"
        },
        {
            name: "Karioshi",
            belt: "orange",
            rate: 50,
            available: true,
            thumb: "content/images/ninja.png"
        }
    ];

}]);
