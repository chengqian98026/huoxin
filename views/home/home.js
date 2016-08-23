/**
 * Created by hxsd on 2016/8/17.
 */
angular.module("myapp").controller("homeCtrl",function($scope,$ionicPopup,$http,$state){
    $scope.reg=false;
    $scope.register=function(){
         $scope.reg=true;

    };

    $scope.getClass=function(){
        if($scope.reg){
            return "on"
        }else {
            return "off"
        }
    };
    $scope.stuclass = [
        {title:"响应式设计",title2:"应用课",rank:"B+",classname:"stu1"},
        {title:"响应式设计",title2:"应用课",rank:"A-",classname:"stu2"},
        {title:"响应式设计",title2:"应用课",rank:"A-",classname:"stu3"},
        {title:"响应式设计",title2:"应用课",rank:"A",classname:"stu4"},
        {title:"响应式设计",title2:"应用课",rank:"B+",classname:"stu5"}
    ];
    $scope.stushow = false;
    $scope.changeshow = function(){
        $scope.stushow = !$scope.stushow;
    };
    $http.get("views/home/workBox.json").success(function(data){
        $scope.date=data
    });
    $scope.loadMore=function() {
        $http.get("views/home/workBox.json").success(function (data) {
            Array.prototype.push.apply($scope.date, data);
        }).finally(function () {
            $scope.$broadcast("scroll.infiniteScrollComplete")
        });
    };
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: '是否退出',
            template: '你确定要退出吗'
        });
        confirmPopup.then(function(res) {
            if(res) {
                $state.go("tabs.home");
            }
        });
    };


});
