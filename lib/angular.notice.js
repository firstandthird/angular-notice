(function(){
  angular.module('ftNotice',[])
      .provider('ftNotice', [function(){

        this.setDefaults = function(options) {
          $.notice.defaults = angular.extend(options, $.notice.defaults);
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
        }

        this.$get = function() {
          return new notice();
        };
      }]);
})();