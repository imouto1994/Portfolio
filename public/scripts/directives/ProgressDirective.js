;(function(){
  var younApp = angular.module('YounApp');

  younApp.directive('younProgress', [function(){
    return {
      restrict: 'A',
      scope: {
        language: '@',
        rate: '@',
        thumbnail: '@'
      },
      replace: true,
      templateUrl: 'templates/progress.html',
      link: function($scope, element, attrs, controller) {
          (function(rate){
            if(rate > 75){
              $scope.levelColor = 'progress-bar-danger';
              $scope.level = 'Proficient'
            } else if(rate > 50) {
              $scope.levelColor = 'progress-bar-warning';
              $scope.level = 'Intermediate';
            } else {
              $scope.levelColor = 'progress-bar-success';
              $scope.level = 'Basics'
            }
          })($scope.rate);
      }
    };
  }]);
})();