/*********************
 * 
 * TYPEWRITER
 * 
 */
const Typewriter = function( id, opts ) {
  opts = {
    messages: [],
    messagesIndex: 0,
    startX: 0,
    endX: window.innerWidth,
    startY: 0,
    interval: 4000,
    gap: 1000,
    fontSize: '16',
    fontFace: 'sans-serif',
    cookieName: "typewriter",
    ...opts
  };
  // create and append dom element
  const cnvs = document.createElement( "canvas" );
  cnvs.setAttribute( 'id', id );
  cnvs.setAttribute( 'style', `z-index: 10; background: transparent;` );
  document.body.appendChild( cnvs );

  // spread default opts and return object
  return {
    ...opts,
    canvas: document.getElementById( id ),
    clearMessage: function( self, delay ) {
      this.clearing = setTimeout( ()  => {
        self.context.clearRect( 0, 0, self.canvas.width, self.canvas.height );
      }, delay );
    },
    initialize: function() {
      const cnvs = this.canvas;
      this.context = cnvs.getContext( '2d' );
      cnvs.setAttribute( 'height', window.innerHeight );
      cnvs.setAttribute( 'width', window.innerWidth );
      if ( this.status === "active" ){
        this.stopMessage();
      } else {
        this.startMessage();
      }
    },
    isMobileDevice: function() {
      return ( typeof window.orientation !== "undefined" ) || ( navigator.userAgent.indexOf( 'IEMobile' ) !== -1 );
    },
    getCookie: function( cname ){
      let name = cname + "=";
      let decodedCookie = decodeURIComponent( document.cookie );
      let ca = decodedCookie.split( ';' );
      for( let i = 0; i <ca.length; i++ ) {
        let c = ca[ i ];
        while ( c.charAt( 0 ) == ' ' ) {
          c = c.substring(1);
        }
        if ( c.indexOf( name ) == 0 ) {
          return c.substring( name.length, c.length );
        }
      }
      return 0;
    },
    setCookie: function( cname, cvalue ){
      const d = new Date();
      d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
      let expires = "expires="+d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    startMessage: function() {
      this.status = "active";

      // start message immediately
      this.messagesIndex = ( parseInt( this.getCookie( this.cookieName ) ) >= this.messages.length ) ? 0 : parseInt( this.getCookie( this.cookieName ) );
      const message = this.messages[ this.messagesIndex ];
      this.typing( message );
      this.clearMessage( this, this.interval - this.gap );
      this.messagesIndex += 1;
      this.setCookie( this.cookieName, this.messagesIndex );

      // loop thru remaining messages
      const self = this;
      this.doMessage = setInterval( () => {
        const message = self.messages[ self.messagesIndex ];
        self.typing( message );
        self.clearMessage( self, self.interval - self.gap );
        if ( self.messagesIndex >= self.messages.length ) {
          self.setCookie( self.cookieName, 0 );
          self.stopMessage();
        }
        else {
          self.messagesIndex += 1;
          self.setCookie( self.cookieName, self.messagesIndex );
        }
      }, this.interval );
    },
    stopMessage: function() {
      this.status = "disabled";
      clearTimeout( this.clearing );
      clearInterval( this.startTyping );
      clearInterval( this.doMessage );
      this.clearMessage( this, 0 );
    },
    typing: function( stringToType ) {
      // set color, font, and line height
      const ctx = this.context;
      ctx.fillStyle = 'white';
      ctx.font = `small-caps ${ this.fontSize }pt ${ this.fontFace }`;
      const lineHeight = this.fontSize + 2;
  
      // sets initial x/y for typing
      let cursorX = this.startX;
      let cursorY = this.startY;
      
      // start at the beginning
      let i = 0;
      const self = this;
      this.startTyping = setInterval( () => {
        // find words to measure for word wrapping
        const rem = stringToType.substr( i );
        let space = rem.indexOf( ' ' );
        space = ( space === -1 ) ? stringToType.length : space;
        const wordwidth = ctx.measureText( rem.substring( 0, space ) ).width;
        const w = ctx.measureText( stringToType.charAt( i ) ).width;
        
        // wrap words once length reaches border
        if( cursorX + wordwidth >= self.endX ) {
            cursorX = self.startX;
            cursorY += lineHeight;
        }

        // write letter
        ctx.fillText( stringToType.charAt( i ), cursorX, cursorY );

        // move cursor and letter index
        cursorX += w;
        i += 1;

        // if at end of string, stop
        if( i === stringToType.length ) {
            clearInterval( self.startTyping );
        }
      }, 42 );
    },
  }
};

/**********************
 * 
 *  LOAD AUREBESH FONT
 * 
 */
const aurebeshFont = new FontFace('Aurebesh', 'url(AurebeshAF-Canon.otf)');
aurebeshFont.load().then( ( font ) => { document.fonts.add(font); } );

/**********************
 * 
 * WELCOME
 * 
 */
const welcomeConfig = {
  'startX': 70,
  'interval': 15000,
  'gap': 12000,
};

 const welcome = new Typewriter( "welcome", {
   ...welcomeConfig,
  'startY': 80,
  'cookieName': 'welcomeIndex',
} );

const welcomeAurebesh = new Typewriter( "welcomeAurebesh", {
  ...welcomeConfig,
  'startY': window.innerHeight - 80,
  'fontFace': 'Aurebesh',
  'cookieName': 'welcomeAurebeshIndex',
} );

const welcomeMessages = [];
welcomeMessages.push( `${ welcome.isMobileDevice() ? 'swipe right' : 'press h' } to toggle help` );
welcomeMessages.push( "welcome to metaforiq" );
welcome.messages = welcomeAurebesh.messages = welcomeMessages;
welcome.initialize();
welcomeAurebesh.initialize();

setInterval( () => {
  welcome.startMessage();
  welcomeAurebesh.startMessage();
}, 35000 );

/********************** 
 * 
 * HELP
 *
 */
const helpConfig = {
  'startX': ( window.innerWidth / 5 ),
  'endX': window.innerWidth - ( window.innerWidth / 5 ),
  'interval': 6000,
  'gap': 2000,
};

const help = new Typewriter( "help", {
  ...helpConfig,
  'startY': 120,
  'cookieName': "helpIndex",
} );

const helpAurebesh = new Typewriter( "helpAurebesh", {
  ...helpConfig,
  'startY': window.innerHeight - 120,
  'fontFace': 'Aurebesh',
  'cookieName': "helpAurebeshIndex",
} );

const helpMessages = [];
helpMessages.push( `${ help.isMobileDevice() ? 'swipe up' : 'press g' } to change gravity` );
helpMessages.push( `${ help.isMobileDevice() ? 'swipe left' : 'press c' } to change colors` );
helpMessages.push( `${ help.isMobileDevice() ? 'swipe down' : 'press t' } to change 2d/3d effect` );
helpMessages.push( `${ help.isMobileDevice() ? 'swipe right' : 'press h' } to toggle help` );
help.messages = helpAurebesh.messages = helpMessages;
help.messagesIndex = help.getCookie( help.cookieName );
helpAurebesh.messagesIndex = helpAurebesh.getCookie( helpAurebesh.cookieName );
help.status = helpAurebesh.status = ( help.getCookie( 'visited' ) != "" ) ? "active" : "disabled";

const startHelping = setTimeout( () => {
  help.initialize();
  helpAurebesh.initialize();
  help.setCookie( 'visited', 1 );
}, ( help.getCookie( 'visited' ) != "" ) ? 0 : 6000 );

/*****************
 * 
 * AUREBESH CHARSET abcdefghijklmnopqrstuvwxyz 1234567890 {}[]:;|.,'"?!$ @#%^&*()-_=+/><\
 * EOF
 * 
 */