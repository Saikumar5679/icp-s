var app1= angular.module('app',[]);

app1.controller('MainCtrl', function ($scope,$http) {


    $scope.myfunction= function (my) {


        $http.get("http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/"+ my.state+"/"+ my.cityname +".json").then(function (response) {

            $scope.data1 = response.data;
            $scope.tempf = response.data.current_observation.temp_f;
            $scope.clear = response.data.current_observation.weather;


        });

    };

});