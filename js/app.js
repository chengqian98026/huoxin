/**
 * Created by hxsd on 2016/8/17.
 */
var myapp=angular.module("myapp",["ionic"]);

myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home": {
            templateUrl: "views/home/home.html",
             controller:"homeCtrl"
        }}
    });
     $stateProvider.state("tabs.revise",{
        url:"/revise",
        views:{"tab-home": {
            templateUrl: "views/home/revise.html"
        }}
    });

    $stateProvider.state("tabs.install",{
        url:"/install",
        views:{"tab-home": {
            templateUrl: "views/home/install.html",
            controller:"homeCtrl"
        }}
    });
    $stateProvider.state("tabs.studentself",{
        url:"/studentself",
        views:{"tab-home": {
            templateUrl: "views/home/studentself.html",
            controller:"homeCtrl"
        }}
    });
    $stateProvider.state("tabs.acxiang",{
        url:"/acxiang",
        views:{"tab-home": {
            templateUrl: "views/community/acxiangqing.html",
            controller:"communityctrl"
        }}
    });
    $stateProvider.state("tabs.workBox",{
        url:"/workBox",
        views:{"tab-home": {
            templateUrl: "views/home/workBox.html",
            controller:"homeCtrl"
        }}
    });


    $stateProvider.state("tabs.aide",{
        url:"/aide",
        views:{"tab-aide": {
            templateUrl: "views/aide/aide.html"
        }}
    });
    $stateProvider.state("tabs.zhuangtai",{
        url:"/zhuangtai",
        views:{"tab-aide": {
            templateUrl: "views/aide/aide_zhuangtai.html"
        }}
    });
    $stateProvider.state("tabs.community",{
        url:"/community",
        views:{"tab-community": {
            templateUrl: "views/community/community.html",
            controller:"communityctrl"
        }}
    });

    $stateProvider.state("tabs.xiangqing",{
        url:"/xiangqing",
        views:{"tab-community": {
            templateUrl: "views/community/xiangqing.html",
            controller:"communityctrl"
        }}
    });
    $stateProvider.state("tabs.acxiangqing",{
        url:"/acxiangqing",
        views:{"tab-community": {
            templateUrl: "views/community/acxiangqing.html",
            controller:"communityctrl"
        }}
    });
    $stateProvider.state("tabs.cg_video",{
        url:"/cg_video",
        views:{"tab-community": {
            templateUrl: "views/community/cg_video.html",
            controller:"communityctrl"
        }}
    });
    $urlRouterProvider.otherwise("/tabs/home");
});