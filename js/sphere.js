/**
 * Draws a particle sphere/spiral on canvas.
 * 
 * @author Hakim El Hattab | http://hakim.se
 */
(function(){

    // requestAnim shim layer by Paul Irish
    window.reqAnimationFrame = (function(){
      	return  window.requestAnimationFrame       || 
              	window.webkitRequestAnimationFrame || 
              	window.mozRequestAnimationFrame    || 
              	window.oRequestAnimationFrame      || 
              	window.msRequestAnimationFrame     || 
              	function(/* function */ callback, /* DOMElement */ element){
                	window.setTimeout(callback, 16);
              	};
    })();

    // Resize
    function resize() {
	canvas.width = w = innerWidth;
	canvas.height = h = innerHeight;
    }

    // Initialise
    function initSetup() {
	d = document,
	canvas = d.body.appendChild( d.createElement( 'canvas' ) ),
	context = canvas.getContext( '2d' ),
	time = 0,
	w = 1,
	h = 1,
	cos = Math.cos,
	sin = Math.sin,
	PI = Math.PI;
    }

    // The main animation loop
    function animate() {
	reqAnimationFrame( animate );
        draw();
    }

    // The main function that will draw
    function draw(){
        context.clearRect( 0, 0, w, h );
	context.fillStyle = 'rgba(0,255,255,.5)';
	context.globalCompositeOperation = 'lighter';

	time += .1;

	// The number of particles to generate
	i = 10000;

	while( i-- ) {
		// The magic
		r = ( ( w + h ) * 0.4 ) * ( cos( ( time + i ) * ( .05 + ( ( sin(time*0.00002) / PI ) * .2 ) ) ) / PI );

		context.fillRect( sin(i) * r + (w/2), 
				  cos(i) * r + (h/2), 
				  1, 
				  1 );
	}
    }

    var d, canvas, context, time, w, h, m, cos, sin, PI;
    initSetup();

    // Monitor browser resize
    // 1) EventType:	'resize'
    // 2) listener:	resize method
    // 3) useCapture:	Boolean indicating whether to bind the event as it is propogating towards the target node, 
    //			(event Capture), or as the event bubbles upwards from the target (event bubble).
    addEventListener( 'resize', resize, false );

    // Initial size
    resize();

    // Perform animation
    animate();

})()