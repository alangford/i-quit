angular.module("iQuit",["ui.router"]).config(function($urlRouterProvider,$stateProvider) {
    $urlRouterProvider.when("", "/");

    $stateProvider
        .state("home", {
            templateUrl: "views/home.html",
            url: "/"
        })
        .state("about", {
            templateUrl: "views/about.html",
            url: "about"
        })
        .state("progress", {
            templateUrl: "views/progress.html",
            url: "progress"
        })


});