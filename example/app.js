var app = angular.module('example-app', ['ftNotice']);

app.config(function(noticeProvider){
  noticeProvider.setDefaults({
    offsetTop: 100
  });
});

var MainController = function($scope, notice) {
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

    notice[method]($scope.message,$scope.type);
  };

  $scope.hide = function(){
    notice.hide();
  };
};
