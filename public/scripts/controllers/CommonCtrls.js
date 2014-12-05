;(function(){
  var younApp = angular.module('YounApp');

  var Controllers = {
    MainController: function($scope, $location, $timeout, $window) {
      $scope.$on('$routeChangeSuccess', function(){
        $scope.selectRoute($location.path().substring(1));
        $timeout(function(){
          $window.scrollTo(0, 0);
        }, 250);
      });

      $scope.selectRoute = function(routeId) {
        $scope.routeId = routeId;
      }
    },

    NavController: function($scope) {
      $scope.routeItems = [
        {
          id: 'home',
          title: 'Home',
          icon: 'icon-before-home'
        },
        {
          id: 'about',
          title: 'About',
          icon: 'icon-before-user4'
        },
        {
          id: 'projects',
          title: 'Projects',
          icon: 'icon-before-briefcase'
        },
        {
          id: 'contacts',
          title: 'Contacts',
          icon: 'icon-before-mobile'
        }
      ]
    }
  }

  younApp.controller('MainController', ['$scope', '$location', '$timeout', '$window', Controllers.MainController]);
  younApp.controller('NavController',  ['$scope', Controllers.NavController]);
})();