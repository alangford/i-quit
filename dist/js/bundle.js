"use strict";

angular.module("iQuit", ["ui.router"]).config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when("", "/");

    $stateProvider.state("home", {
        templateUrl: "views/home.html",
        url: "/"
    }).state("about", {
        templateUrl: "views/about.html",
        url: "about"
    }).state("progress", {
        templateUrl: "views/progress.html",
        url: "progress"
    });
});
"use strict";

/**
 * Created by beebe on 3/15/2017.
 */
angular.module("iQuit").controller("iQuitCtrl", function ($scope, iQuitService) {

    $scope.rea = [];
    $scope.resImg = [];
    var weekone = ["Coughing, nose running The body\u2019s respiratory system begins to clean itself Drink lots of fluids", "Sore throat The clearing away of nicotine and tar and the growth of new tissue Suck sweets, eat honey or anything else that will soothe your throat", "Tight chest The coughing causes the chest muscles to get sore Try relaxation and deep breathing exercises"];
    var weektwo = ["Flatulence and constipation Temporary slowing of intestinal movement Eat lots of fibre and drink lots of fluids", "Headaches Increased blood flow (with more oxygen) to the back of the brain. Drink lots of fluids and do relaxation exercises"];
    var weekthree = ["Irritability Your body is desperate for nicotine Relaxation exercises", "Reduced concentration Increased blood flow and oxygen to brain and lack of stimulation from nicotine Don\u2019t over exert yourself.", "Fatigue Without nicotine your metabolic rate drops down to normal Don\u2019t over exert yourself. This feeling will go away in a few weeks"];

    $scope.symptoms = [[["None"]], [weekone], [weekone], [weekone], [weekone], [weekone], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weektwo], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree], [weekthree]];
    $scope.yes = function () {
        $scope.smokeToday = true;
        $scope.ifYes = true;
        $scope.howManyDays = JSON.parse(localStorage.getItem("howManyDays"));
        $scope.howManyDays = 0;
        localStorage.setItem("howManyDays", JSON.stringify($scope.howManyDays));
        $scope.howManyDaysStored = JSON.parse(localStorage.getItem("howManyDays"));
    };

    $scope.no = function () {
        $scope.smokeToday = true;
        $scope.ifYes = false;
        $scope.howManyDays = JSON.parse(localStorage.getItem("howManyDays"));
        $scope.howManyDays++;
        localStorage.setItem("howManyDays", JSON.stringify($scope.howManyDays));
        $scope.howManyDaysStored = JSON.parse(localStorage.getItem("howManyDays"));
    };

    $scope.submit = function (r) {
        $scope.rea.push({ r: r });
        localStorage.setItem("reasons", JSON.stringify($scope.rea));
        $scope.reasons = "";
        $scope.storedReasons = JSON.parse(localStorage.getItem("reasons"));
    };
    $scope.storedReasons = JSON.parse(localStorage.getItem("reasons"));

    $scope.photo = function (img) {
        $scope.resImg.push({ img: img });
        localStorage.setItem("reasonsimg", JSON.stringify($scope.resImg));
        $scope.reasonImg = "";
        $scope.storedReasonsImg = JSON.parse(localStorage.getItem("reasonsimg"));
    };
    $scope.storedReasonsImg = JSON.parse(localStorage.getItem("reasonsimg"));

    $scope.gettingQuote = iQuitService.getQuote().then(function (res) {
        $scope.quote = res.data;
    });

    $scope.currentTime = moment().format("MMMM Do YYYY, h:mm a");
});
"use strict";

/**
 * Created by beebe on 3/15/2017.
 */
angular.module("iQuit").directive("iQuitDirective", function () {
    return {
        template: "<h1 style='text-align: center'>It's okay the important thing is you're trying!</h1>"
    };
});
"use strict";

/**
 * Created by beebe on 3/16/2017.
 */
angular.module("iQuit").service("iQuitService", function ($http) {

    this.getQuote = function () {
        return $http({
            method: "GET",
            url: "http://quotesondesign.com/api/3.0/api-3.0.json"
        });
    };
});
//# sourceMappingURL=bundle.js.map
