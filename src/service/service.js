(function (angular) {
    var app = angular.module('hmservice', []);
    app.service('hmjsonp', ['$window', function ($window) {
        this.jsonp = function (opts) {
            var url = opts.url + '?';
            for (var key in opts.params) {
                url += (key + '=' + opts.params[key] + '&')
            }
            console.log(url);
            var callbakcName = "hmjsonp_" + $window.Math.random().toString().slice(2);
            $window[callbakcName] = opts.callback;
            url += "callback=" + callbakcName;
            var script = $window.document.createElement("script");
            script.src = url;
            $window.document.body.appendChild(script);

        }
    }])
})(angular)