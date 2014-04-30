/*!
 * angular-notice - Angular lib for notice
 * v0.1.0
 * https://github.com/firstandthird/angular-notice
 * copyright First + Third 2014
 * MIT License
*/
(function(){
  angular.module('ftNotice',[])
      .service('ftNotice', [function(){
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