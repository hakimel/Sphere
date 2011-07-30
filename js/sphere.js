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
		w = d.width,
		h = d.height,
		cos = Math.cos,
		sin = Math.sin,
		PI = Math.PI;
	
//	The below snippet can be used to make the Sphere adapt
// 	to the window size as it changes
//
//	window.addEventListener( 'resize', resize, false );
//	
//	resize();
//	
//	function resize() {
//	    canvas.width = w = window.innerWidth;
//	    canvas.height = h = window.innerHeight;
//	}
	
	canvas.width = w;
	canvas.height = h;
	
	// The main animation loop
    setInterval( function() {
		context.clearRect( 0, 0, w, h );
	    
	    time += .1;
		
		// The number of particles to generate
	    i = 10000;
	    
		while( i-- ) {
//			Same equation as below, but broken out for readability
//	        var f = .05 + ( ( sin(time*0.00002) / PI ) * .2 ),
//				r = ( ( w + h ) / 2 ) * ( cos( (time+i)*f ) / PI );
			
			r = ( ( w + h ) / 2 ) * ( cos( ( time + i ) * ( .05 + ( ( sin(time*0.00002) / PI ) * .2 ) ) ) / PI );
	        
	        context.fillStyle = 'rgba(0,255,255,.5)';
	        context.fillRect( sin(i) * r + (w/2), 
							  cos(i) * r + (h/2), 
							  1.5, 
							  1.5 );        
	    }
	}, 16 );
})()