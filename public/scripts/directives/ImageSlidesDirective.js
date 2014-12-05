;(function(){
  var younApp = angular.module('YounApp');

  younApp.directive('imageSlides', [function(){
    return {
      restrict: 'A',
      scope: {
        imageSlides: "=",
        slidesId: "@"
      },
      replace: true,
      templateUrl: 'templates/imageSlides.html',
      link: function($scope, element, attrs, controller) {
          $scope.hasLoadedImages = false;
          $scope.slides = [];
          $scope.slides.push($scope.imageSlides[0]);


          $scope.loadImages = function() {
            if($scope.hasLoadedImages){
              return;
            }
            $scope.slides = $scope.imageSlides;
            $scope.hasLoadedImages = true;
          }
          $scope.currentIndex = 0;
      }
    };
  }]);
})();