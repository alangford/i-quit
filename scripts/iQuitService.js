/**
 * Created by beebe on 3/16/2017.
 */
angular.module("iQuit").service("iQuitService", function($http){




    this.getQuote  = () =>{
        return $http({
            method:`GET`,
            url:`http://quotesondesign.com/api/3.0/api-3.0.json`
        })
    }
});
