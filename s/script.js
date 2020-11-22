$(document).ready(function(){
$('.sp').hide();
$('.spoiler-title').click(function(){
    $(this).toggleClass('opened').toggleClass('closed').next().slideToggle();
    if($(this).hasClass('opened')) {
        $(this).html('▲');
    }
    else {
        $(this).html('▼');
    }
});
});