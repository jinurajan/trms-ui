'use strict';

/* Filters */

angular.module('cab4uFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
