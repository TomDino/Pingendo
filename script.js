$('.burger').on('click', function(){
    $('#big-menu').toggle('slow');
});

var box;

$('.gridbox').each(function(box){
    var thisHeight = $(this).height() / 2;
    var kidHeight = $(this).children('.content').height() /2;
    var marginTop = thisHeight-kidHeight+'px';
    $(this).children('.content').css('margin-top', marginTop);
});

var picHeight = $('#banner .content').children('img').height() - 15;
$('#banner').height(picHeight);
