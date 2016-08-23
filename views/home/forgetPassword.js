/**
 * Created by hxsd on 2016/8/19.
 */
angular.module("myapp").controller("forgetPasswordCtrl",function($scope,$interval){
    $scope.codetime = "获取验证码";
    $scope.time = 60;
    var timer = null;

    $scope.yanzhengma=function(){
        timer = $interval(function(){
            $scope.time = $scope.time - 1;
            $scope.codetime = $scope.time+"秒后点击重发";
            if($scope.time === 0) {
                $scope.codetime = "获取验证码";
                $interval.cancel(timer);
            }
        }, 1000);
    }
});