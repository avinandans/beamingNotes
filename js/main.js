$('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('.body, body, html').toggleClass('active');
    $('.sideBar').toggleClass('active')
})


$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 100) $('nav.navbar.navbar-expand-lg').addClass('shadow-sm');
    else $('nav.navbar.navbar-expand-lg').removeClass('shadow-sm');
})