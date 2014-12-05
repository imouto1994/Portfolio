;(function(){
  var younApp = angular.module('YounApp');

  younApp.directive('younAnimate', ['$timeout', function($timeout){
    return {
      restrict: 'A',
      priority: 100,
      scope: {
        younAnimate: '@',
        delay: '@'
      },
      link: function($scope, element, attrs, controller) {
        element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            element.toggleClass($scope.younAnimate);
        });
        element.css('opacity', 0);
        $timeout(function(){
          element.css('opacity', 1);
          element.toggleClass($scope.younAnimate);
        }, $scope.delay);
      }
    };
  }]);
})();