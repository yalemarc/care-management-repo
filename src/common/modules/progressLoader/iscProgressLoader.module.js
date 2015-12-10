/**
 * Created by douglasgoodman on 11/21/14.
 */
(function(){
  'use strict';

  /* @ngInject */
  function iscProgressLoader( $log ){//jshint ignore:line

    // ----------------------------
    // vars
    // ----------------------------

    // ----------------------------
    // class factory
    // ----------------------------

    var service  = {
      start: start,
      set: set,
      end: end,
      get: get,
      inch: inch
    };

    return service;

    // ----------------------------
    // functions
    // ----------------------------

    function start () {
      //$(document).skylo('start');//jshint ignore:line
    }

    function set (position) {//jshint ignore:line
      //$(document).skylo('set', position);//jshint ignore:line
    }

    function end () {
      //$(document).skylo('end');//jshint ignore:line
    }

    function get () {
      //return $(document).skylo('get');//jshint ignore:line
    }

    function inch (amount) {//jshint ignore:line
      //$(document).skylo('show',function(){//jshint ignore:line
      //  $(document).skylo('inch', amount);//jshint ignore:line
      //});
    }

  }// END CLASS



  // ----------------------------
  // inject
  // ----------------------------

  angular.module( 'isc.progressLoader', [] )
      .factory( 'iscProgressLoader', iscProgressLoader );

})();
