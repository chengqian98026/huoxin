/**
 * Created by hxsd on 2016/8/18.
 */

angular.module("myapp").controller("aideZhuangtaiCtrl",function($scope,$ionicModal){
    // 构造模对话框
    $scope.haoping=false;
    $scope.display=function(){
        $scope.haoping=true;
    }
    $scope.notdisplay=function(){
        $scope.haoping=false;
    }
});
