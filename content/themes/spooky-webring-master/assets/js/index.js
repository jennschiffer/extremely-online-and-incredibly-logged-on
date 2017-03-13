/** js for webring - @jennschiffer **/

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
		$('pre code').each(function(i, e) {hljs.highlightBlock(e)});
    });

}(jQuery));