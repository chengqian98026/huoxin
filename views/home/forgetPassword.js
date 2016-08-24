/**
 * Created by hxsd on 2016/8/19.
 */
angular.module("myapp").controller("forgetPasswordCtrl",function($scope,$interval){
    $scope.codetime = "获取验证码";
    
    var timer = null;
    $scope.color="#27b4c1";
    $scope.yanzhengma=function(){
        if(timer!=null)return false;
        $scope.time = 60;
        $scope.color="#9ad7db";
        timer = $interval(function(){
            $scope.time = $scope.time - 1;
            $scope.codetime = $scope.time+"秒后点击重发";
            if($scope.time === 0) {
                $scope.codetime = "获取验证码";
                $interval.cancel(timer);
                timer = null;
            }
        }, 1000);
    }
});
