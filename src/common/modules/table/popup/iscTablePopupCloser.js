/**
 * Created by hzou on 10/13/2015
 *
 */

// closes zf-modal when 'ESCAPE' key is pressed

(function () {
  'use strict';

  // ----------------------------
  // injection
  // ----------------------------
  angular.module( 'isc.table' )
    .directive( 'iscTablePopupCloser', iscTablePopupCloser );

  /* @ngInject */
  function iscTablePopupCloser(devlog, $global ) {
    devlog.channel('iscTablePopupCloser').debug( 'iscTablePopupCloser LOADED');

    // ----------------------------
    // vars
    // ----------------------------

    // ----------------------------
    // class factory
    // ----------------------------
    return {
      restrict: 'A',
      link    : link
    };

    // ----------------------------
    // functions
    // ----------------------------

    function link( scope, trElem, attrs ) {
      trElem.on( 'keydown', function (event) {
        if ( event.keyCode === $global.keyCode.ESCAPE ) {
          var $target = $( event.target );
          if ( $target.is( ':input' ) ) {
            trElem.focus();
          } else {
            scope.iscRowCtrl.onCommand( 'cancelEdit' );
          }
        }
      } );
    }
  }// END CLASS

})();
