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
	
	function resize() {
		canvas.width = w = innerWidth;
		canvas.height = h = innerHeight;
	}

	// Monitor browser resize
	addEventListener( 'resize', resize, false );

	// Initial size
	resize();
	
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