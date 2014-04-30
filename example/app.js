var app = angular.module('example-app', ['ftNotice']);

app.config(function(ftNoticeProvider){
  ftNoticeProvider.setDefaults({
    offsetTop: 100
  });
});

var MainController = function($scope, ftNotice) {
  $scope.message = 'Shown message';
  $scope.type = 'info';
  $scope.isSticky = false;

  $scope.availableLevels = [
    {
      'name' : 'Information',
      'value' : 'info'
    },
    {
      'name' : 'Success',
      'value' : 'success'
    },
    {
      'name' : 'Warning',
      'value' : 'warning'
    },
    {
      'name' : 'Error',
      'value' : 'error'
    }
  ];

  $scope.show = function(){
    var method = $scope.isSticky ? 'showSticky' : 'show';

    ftNotice[method]($scope.message,$scope.type);
  };

  $scope.hide = function(){
    ftNotice.hide();
  };
};