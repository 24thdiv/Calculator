/**
 * Created by Divya Patel on 9/14/2016.
 */

var app =  angular.module("cal",[]);

app.controller('calculatorController',function($scope,$window,$http){

    $scope.operate = function (operator) {
        console.log("In Controller");
        var op = operator;
        var num1  = $scope.num1;
        var num2 = $scope.num2;
        console.log("num1 " + num1);
        console.log("num2 " + num2);
        console.log("operator: " + op);

        $http({
            method : 'GET',
            url : '/calculate',
            params : {
                "n1" : num1,
                "n2" : num2,
                "op" : op
            }
           
        }).success(function (data) {

            console.log("Return controller: status code is");
            console.log(data.statusCode);
            var statusCode = data.statusCode;
            if (statusCode==200){
                $scope.ans = data.ans;
            }
            else{
                $scope.ans = data.ans;
                $scope.num1 = null;
                $scope.num2 = null;

            }



            
        }).error(function (error) {
            console.log("Error is "+error);

        });
    };


    $scope.clearFields = function () {

        $scope.num1 = null;
        $scope.num2 = null;
        $scope.ans = null;

    };

});