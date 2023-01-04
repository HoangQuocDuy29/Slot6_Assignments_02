var myApp = angular.module('myApp',[]);
myApp.controller('jsonCtrl',function ($scope, $http) {
    $http.get('data.json').success(function (data) {
        $scope.data = data;
    });

    $scope.addEmp = function () {
        $scope.data.push({name: $scope.empName, city: $scope.empCity, state: $scope.empState});
    }
    $scope.getTotadata = function () {
        reutnr $scope.data.length;
    }

    $scope.reversedMessage = function () {
        return $scope.empName.split("").reverse().join("");
    }
});

function testCtrl($scope) {
    $scope.names = [
        {"name": "ThiDk"},
        {"city": "Ha Noi"},
        {"state": "HN"}
    ];

    $scope.addName = function () {
        $scope.names.push({name: $scope.myName});
    }

    $scope.reversedMessage = function () {
        return $scope.myName.split("").resever().join("");
    }
}