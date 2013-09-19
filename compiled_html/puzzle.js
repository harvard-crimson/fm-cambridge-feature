var colorset = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970',
        '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
var colorindex = 0;
var curcolor;

$(document).ready(function() {
	// $("path").each(function() {
	// 	$(this).attr('fill', nextColor());
	// 	$(this).attr('fill-opacity', '0.5');
	// 	$(this).attr('stroke', '#FFFFFF');
	// });
	// $("text.preview").hide();

	$(".piece-group").mouseenter(function() {
		// curcolor = $(this).attr('fill');
		// $(this).attr('fill', '#000000').attr('fill-opacity', '0.3');
		// $(this).find('text.preview').show();
		// $('text.preview[data-piece="' + $(this).attr('id') + '"]').show();
	}).mouseleave(function() {
		// $(this).attr('fill', curcolor);
		// $(this).attr('fill-opacity', '0.5');
		// $(this).find('text.preview').hide();
		// $('text.preview[data-piece="' + $(this).attr('id') + '"]').fadeOut();
	});
});

function nextColor() {
	return colorset[colorindex++ % colorset.length];
}
