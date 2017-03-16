/**
 * Created by beebe on 3/15/2017.
 */
angular.module("iQuit").controller("iQuitCtrl",function($scope){

   $scope.howManyDays = 0;

    $scope.yes = function(){
        $scope.smokeToday = true;
        $scope.ifYes = true;
        $scope.howManyDays = 0;


    };
    $scope.no = function(){
        $scope.smokeToday = true;
        $scope.ifYes = false;
        $scope.howManyDays += 1;

    }










});