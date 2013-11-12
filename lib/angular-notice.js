(function(){
  angular.module('notice',[])
      .service('notice', [function(){
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
      }]);
})();