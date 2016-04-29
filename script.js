

// Show menu when click burger
$('.burger').on('click', function(){
    $('#big-menu').toggle('slow');
});

var box;

// Vertically center content of work page boxes
$('.gridbox').each(function(box){
    var thisHeight = $(this).height() / 2;
    var kidHeight = $(this).children('.content').height() /2;
    var marginTop = thisHeight-kidHeight+'px';
    $(this).children('.content').css('margin-top', marginTop);
});


// Vertically center content of banner
var picHeight = $('#banner .content').children('.banner-img').height() - 15;
var bannerTextHeight = $('.banner-text').children('.banner-text-container').height();
var bannerTextTop = (picHeight/2) - bannerTextHeight;

$('#banner').height(picHeight);
$('.banner-text').height(picHeight);
$('.banner-text').children('.banner-text-container').css('margin-top', bannerTextTop)


$(window).resize(function(){
    // Vertically center content of banner
    var picHeight = $('#banner .content').children('.banner-img').height() - 15;
    var bannerTextHeight = $('.banner-text').children('.banner-text-container').height();
    var bannerTextTop = (picHeight/2) - bannerTextHeight;

    $('#banner').height(picHeight);
    $('.banner-text').height(picHeight);
    $('.banner-text').children('.banner-text-container').css('margin-top', bannerTextTop)


});
