;(function(){
  var younApp = angular.module('YounApp');

  younApp.directive('inViewAnimate', ['$timeout', function($timeout){
    return {
      restrict: 'A',
      replace: true,
      transclude: true,
      templateUrl: 'templates/inViewAnimate.html',
      scope: {
        inViewAnimate: '@',
        delay: '@?',
        offset: '@?'
      },
      controller: function($scope) {
        $scope.offset =  $scope.offset || 0;
        $scope.options = '{offset : ' + $scope.offset + '}'
      },
      link: function($scope, element, attrs, controller) {
        $scope.delay = $scope.delay || 0;

        element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            element.toggleClass($scope.inViewAnimate);
        });
        element.css('opacity', 0);
        $scope.hasAnimated = false;
        $scope.animate = function() {
          if(!$scope.hasAnimated){
            $timeout(function(){
              element.css('opacity', 1);
              element.toggleClass($scope.inViewAnimate);
              $scope.hasAnimated = true;
            }, $scope.delay);
          }
        }
      }
    };
  }]);
})();