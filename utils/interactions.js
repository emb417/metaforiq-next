/**********************
 * 
 * PWA
 * 
 */
 window.onload = () => {
  "use strict";

  if ( "serviceWorker" in navigator ) {
    navigator.serviceWorker.register( "../sw.js" );
  }
};

/**********************
 * Tracking Events
 */
const trackInteraction = ( type, dims = {} ) => gtag( 'event', type, dims );

/*****************************
 * Resize Interaction
 * 
 */

window.addEventListener('resize', e => {
  help.stopMessage();
  helpAurebesh.stopMessage();
  forceRain.resetRain( forceRain.colorsIndex, forceRain.gravity, forceRain.threeDee );
  help.initialize();
  helpAurebesh.startY = window.innerHeight - 80;
  helpAurebesh.initialize();
  trackInteraction( 'resize', {
    'colorsIndex': forceRain.colorsIndex,
    'gravity': forceRain.gravity,
    'threeDee': forceRain.threeDee
  } );
}, false);

/*****************************
 * Touch Interactions
 * 
 */

let xDown = null;
let yDown = null;

document.addEventListener('touchstart', e => {
  const firstTouch = e.touches[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
}, false);

document.addEventListener('touchmove', e => {
  if ( ! xDown || ! yDown ) {
      return;
  }

  const xUp = e.touches[0].clientX;
  const yUp = e.touches[0].clientY;

  const xDiff = xDown - xUp;
  const yDiff = yDown - yUp;

  let { colors, colorsIndex, gravity, threeDee } = forceRain;
  if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) { // most significant
      if ( xDiff > 0 ) {
        colorsIndex = ( colorsIndex < colors.length - 1 ) ? colorsIndex + 1 : -1;
        forceRain.resetRain( colorsIndex, gravity, threeDee );
        trackInteraction( 'change_color', { colorsIndex, gravity, threeDee } );
      } else {
        if( help.status === "active" ){
          help.stopMessage();
          helpAurebesh.stopMessage();
          trackInteraction( 'stop_help' );
        }
        else {
          help.initialize();
          helpAurebesh.initialize();
          trackInteraction( 'start_help' );
        }
      }
  } else {
    if ( yDiff > 0 ) {
      gravity = ( gravity === 2 ) ? 0 : gravity + 1;
      forceRain.resetRain( colorsIndex, gravity, threeDee );
      trackInteraction( 'change_gravity', { colorsIndex, gravity, threeDee } );
    } else {
      threeDee = !threeDee;
      forceRain.resetRain( colorsIndex, gravity, threeDee );
      trackInteraction( 'change_threedee', { colorsIndex, gravity, threeDee } );
    }
  }
  xDown = null;
  yDown = null;
}, false);

/*****************************
 * Keyboard Interactions
 * 
 */

window.addEventListener('keydown', e => {
  // help
  if ( e.key == 'h' ) {
    if( help.status === "active" ){
      help.stopMessage();
      helpAurebesh.stopMessage();
      trackInteraction( 'stop_help' );
    }
    else {
      help.initialize();
      helpAurebesh.initialize();
      trackInteraction( 'start_help' );
    }
  }

  // forceRain
  let { colors, colorsIndex, gravity, threeDee } = forceRain;
  let dirty = false;
  let eventType = "change";
  switch( e.key ){
    case 'c':
      colorsIndex = ( colorsIndex < colors.length - 1 ) ? colorsIndex + 1 : -1;
      eventType = "change_color";
      dirty = true;
      break;
    case 'g':
      gravity = ( gravity === 2 ) ? 0 : gravity + 1;
      eventType = "change_gravity";
      dirty = true;
      break;
    case 't':
      threeDee = !threeDee;
      eventType = "change_threedee";
      dirty = true;
      break;
    default:
      break;
  }
  if ( dirty ) { trackInteraction( eventType, { colorsIndex, gravity, threeDee } ); }
  return !dirty || forceRain.resetRain( colorsIndex, gravity, threeDee );
}, false );