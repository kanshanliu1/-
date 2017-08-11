//热映模块
(function (angular) {
    var app = angular.module('moviecat_in_theaters', ['hmservice', 'ngRoute']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/in_theaters', {
            templateUrl: './in_theaters/in_theaters.html',
            controller: 'in_theaters_ctrl',
        });

    }])
    app.controller('in_theaters_ctrl', ['hmjsonp', '$scope', function (hmjsonp, $scope) {
        hmjsonp.jsonp({
            url: "http://api.douban.com/v2/movie/in_theaters",
            params: {},
            callback: function (data) {
                console.log(data);
                $scope.movies = data;
                //告诉视图 数据模型发生变化了 你赶紧刷新你的视图.
                $scope.$apply();
            }
        });
    }])
})(angular)