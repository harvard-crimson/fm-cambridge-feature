var colorset = ['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce', '#492970',
        '#f28f43', '#77a1e5', '#c42525', '#a6c96a'];
var colorindex = 0;
var curcolor;

$(document).ready(function() {
	$("path").each(function() {
		$(this).attr('fill', nextColor());
		$(this).attr('fill-opacity', '0.5');
		$(this).attr('stroke', '#FFFFFF');
	});
	$("text.preview").hide();

	$("path").mouseover(function() {
		curcolor = $(this).attr('fill');
		$(this).attr('fill', '#000000').attr('fill-opacity', '0.3');
		$('text.preview[data-piece="' + $(this).attr('id') + '"]').show();
	}).mouseout(function() {
		$(this).attr('fill', curcolor);
		$(this).attr('fill-opacity', '0.5');
		$('text.preview[data-piece="' + $(this).attr('id') + '"]').hide();
	});
});

function nextColor() {
	return colorset[colorindex++ % colorset.length];
}