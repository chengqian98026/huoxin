/**
 * Created by hxsd on 2016/8/18.
 */
angular.module("myapp").controller("communityctrl",function($scope,$http,$ionicPopup,$timeout,$ionicModal){
    $scope.bcasts = [
        {title1:"2016春季招聘会",title2:"#新闻",content:"2016年春季招聘会将于2016年4月12日在火星时代....",date:"16-2-13"},
        {title1:"火星时代",title2:"#校园",content:"火星时代开学典礼，我们将为你提供优质的教学环境....",date:"16-2-11"},
        {title1:"获奖信息",title2:"#新闻",content:"火星时代的1601期UI设计专业3班，李雷同学成功....",date:"16-2-10"},
        {title1:"2016春季招聘会",title2:"#就业",content:"2016年春季招聘会将于2016年4月12日在火星时代....",date:"16-2-9"},
        {title1:"visim",title2:"#小圆",content:"影子的爱人新书到店，作者于1月1日到校，新书....",date:"16-2-8"}
    ];
    $scope.ac = [
        {imgsrc:"images/acbg1_02.png",title:"海报的创意设计",content:"海子团队讲解想法，带你开拓思维和想法","person":"火星时代",date:"16-5-15"},
        {imgsrc:"images/acbg2_01_02.png",title:"海报的创意设计",content:"海子团队讲解想法，带你开拓思维和想法","person":"火星时代",date:"16-5-15"},
        {imgsrc:"images/acbg1_02.png",title:"海报的创意设计",content:"海子团队讲解想法，带你开拓思维和想法","person":"火星时代",date:"16-5-15"},
        {imgsrc:"images/acbg2_01_02.png",title:"海报的创意设计",content:"海子团队讲解想法，带你开拓思维和想法","person":"火星时代",date:"16-5-15"}
    ];
    $scope.cg = [
        {imgsrc:"images/cg-bg_02.png",title1:"创意在哪里",title2:"#海报设计"},
        {imgsrc:"images/cg-bg_03.png",title1:"奇幻森林之旅",title2:"#影视特效"},
        {imgsrc:"images/cg-bg_04.png",title1:"我们一路向前",title2:"#行业经验"}
    ];
    $scope.loadMore = function(){
        $http.get("views/community/data.json").success(function(data){
            Array.prototype.push.apply($scope.bcasts,data)
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    };
    $scope.loadMore2 = function(){
        $http.get("views/community/dataac.json").success(function(data){
            Array.prototype.push.apply($scope.ac,data)
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    };
    $scope.loadMore3 = function(){
        $http.get("views/community/datacg.json").success(function(data){
            Array.prototype.push.apply($scope.cg,data)
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete")
        })
    };
    $scope.showConfirm = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: '是否使用流量播放视频',
            template: ''
        });
        confirmPopup.then(function(res) {
            if(res) {
                console.log('取消');
            } else {
                console.log('确定');
            }
        });
    };
    $scope.showPopup = function() {
        $scope.sta = false;
        var myPopup = $ionicPopup.show({
            templateUrl: 'views/community/btn.html',
            title: '分享到',
            subTitle:'',
            scope: $scope,
            buttons: [
                {text: '取消'}
            ]
        });
        myPopup.then(function (res) {
            console.log('Tapped!', res);
        });
        $timeout(function () {
            myPopup.close();
        }, 20000);
    }
});
