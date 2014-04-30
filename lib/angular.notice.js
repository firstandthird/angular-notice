(function(){
  angular.module('ftNotice',[])
      .provider('ftNotice', [function(){

        this.setDefaults = function(options) {
          $.notice.defaults = angular.extend($.notice.defaults, options);
        };

        function notice() {
          this.defaultLevel = 'info';

          this.show = function(message, level, options){
            options = options || {};
            level = level || this.defaultLevel;

            $.notice(message,angular.extend({
              level : level
            },options));
          };

          this.showSticky = function(message,level){
            this.show(message,level, {
              timeout : false
            });
          };

          this.hide = function(){
            this.show('close');
          };

          this.showSuccess = function(message, options){
            this.show(message, 'success', options);
          };

          this.showError = function(message, options){
            this.show(message, 'error', options);
          };
        }

        this.$get = function() {
          return new notice();
        };
      }]);
})();