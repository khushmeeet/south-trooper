'use strict';

angular.module('southTrooperApp')
  .factory('contactService',function($resource){
    return $resource('/api/contacts',{},{
      save:{
        method:'POST',
        isArray:false
      }
    });
  });
