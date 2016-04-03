$(document).ready(function() { 
	$(".mdl-navigation__link").on("click", function(event){
		event.preventDefault();
		$(".demo-drawer").removeClass("is-visible")
						 .attr("aria-hidden", true);
		$(".mdl-layout__obfuscator").removeClass("is-visible");
		
		var menu = $(this).data("menu");
		$(".mdl-layout-title").text($(this).data("menu"));
		$(".mdl-layout__content").children().hide();
		$("._"+menu + "-content").show();
	});
});