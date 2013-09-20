jQuery(document).ready(function(){
	jQuery("div.panel").mouseover(function(){
		jQuery(this).addClass("module-hover");
	});
	jQuery("div.panel").mouseout(function(){
		jQuery(this).removeClass("module-hover");
	});
});