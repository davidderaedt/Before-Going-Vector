/*
	Fallbacks for <img> based SVG
*/


/* Using Modernizr*/
if (!Modernizr.svg) {
  $("img[src$='.svg']")
    .attr("src", fallback);
}


/* Using SVGeezy */
svgeezy.init(false, 'png');

