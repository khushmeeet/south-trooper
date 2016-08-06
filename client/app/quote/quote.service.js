'use strict';

angular.module('southTrooperApp')
  .factory('quoteService',function($resource){
    return $resource('/api/quotes',{},{
      save:{
        method:'POST',
        isArray:false
      }
    });
  });
