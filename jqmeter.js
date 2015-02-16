/*

Title:		jQMeter: a jQuery Progress Meter Plugin
Author:		Gerardo Larios
Version:	0.1
Website:	http://www.gerardolarios.com/jqmeter
License: 	Dual licensed under the MIT and GPL licenses.

*/

(function($) {

    $.fn.extend({
        jQMeter: function(options) {
            if (options && typeof(options) == 'object') {
                options = $.extend( {}, $.jQMeter.defaults, options );
            }
            this.each(function() {
                new $.jQMeter(this, options );
            });
            return;
        }
    });

	$.jQMeter = function(elem, options) {		
		goal = parseInt((options.goal).replace(/\D/g,''));
		raised= parseInt((options.raised).replace(/\D/g,''));
		width=options.width;
		height=options.height;
		bgColor=options.bgColor;
		barColor=options.barColor;
		orientation=options.orientation;
		animationSpeed=options.animationSpeed;
		displayTotal=options.displayTotal;
		total=(raised/goal)*100;
		if(total>=100){total=100;}
		if(orientation=='vertical'){
			$(elem).html('<div class="therm outer-therm vertical"><div class="therm inner-therm vertical"></div></div>');
			$(elem).children('.outer-therm').attr('style','width:'+width+';height:'+height+';background-color:'+bgColor);
			$(elem).children('.outer-therm').children('.inner-therm').attr('style','background-color:'+barColor+';height:0;width:'+width);
			$(elem).children('.outer-therm').children('.inner-therm').animate({height:total+'%'},animationSpeed);
		}else{
			$(elem).html('<div class="therm outer-therm"><div class="therm inner-therm"></div></div>');
			$(elem).children('.outer-therm').attr('style','width:'+width+';height:'+height+';background-color:'+bgColor);
			$(elem).children('.outer-therm').children('.inner-therm').attr('style','background-color:'+barColor+';height:'+height+';width:0');
			$(elem).children('.outer-therm').children('.inner-therm').animate({width:total+'%'},animationSpeed);
		}
		if(displayTotal){
			var formatted_height=parseInt(height);
			var padding=(formatted_height/2)-13+'px 10px';
			if(orientation!='horizontal'){
			  padding='10px 0';
			}
			$(elem).children('.outer-therm').children('.inner-therm').html('<span style="padding:'+padding+';">'+total+'%</span>');
		}
		$(elem).append('<style>.therm{height:30px;border-radius:5px;}.outer-therm{margin:20px 0;}.inner-therm span {color: #fff;display: inline-block;float: right;font-family: Trebuchet MS;font-size: 20px;font-weight: bold;}.vertical.inner-therm span{width:100%;text-align:center;}.vertical.outer-therm{position:relative;}.vertical.inner-therm{position:absolute;bottom:0;}</style>');
	};
	$.jQMeter.defaults = {
		width:'100%',
		height:'50px',
		bgColor:'#444',
		barColor:'#bfd255',
		orientation:'horizontal',
		animationSpeed:2000,
		displayTotal:true
	};

})(jQuery);