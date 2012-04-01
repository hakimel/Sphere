/**
 * Draws a particle sphere/spiral on canvas.
 * 
 * @author Hakim El Hattab | http://hakim.se
 */
(function(){
	var d = document,
		canvas = d.body.appendChild( d.createElement( 'canvas' ) ),
	    context = canvas.getContext( '2d' ),
	    time = 0,
		w = 1,
		h = 1,
		cos = Math.cos,
		sin = Math.sin,
		PI = Math.PI;
	
	// The below snippet can be used to make the Sphere adapt
	// to the window size as it changes
	function resize() {
	    canvas.width = w = innerWidth;
	    canvas.height = h = innerHeight;
	}
	resize();
	addEventListener( 'resize', resize, false );
	
	// The main animation loop
    setInterval( function() {
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
	}, 16 );
})()