(function() {
  'use strict';

    $('.owl-carousel').owlCarousel({
        items: 1,
        stagePadding: 0,
        singleItem: true,
        margin: 0,
        padding: 0,
        controlsClass: "slider__controls",
        dotsClass: "slider__nav",
        dotClass: "slider__dot",
        // autoplay: true,
        // autoplaySpeed: 800,
        // autoplayTimeout: 10000,
        scroll_speed: 800,
        dotsSpeed: 800,
        dragEndSpeed: 800,
        loop: true,
        lazyLoad: true
    });

    $('window').on('resize', function () {

    });
    var windowHeight = $(window).outerHeight();
    $('.nav-trigger').on('click', function(){
        $('.nav').height('100vh');
        $('.wrapper').css("cssText","height:"+windowHeight+"px!important")
    });
    $('.nav-close').on('click', function(){
        $('.wrapper').css("cssText","");
        $('.nav').height('')
    });
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcclxuICAgICAgICBpdGVtczogMSxcclxuICAgICAgICBzdGFnZVBhZGRpbmc6IDAsXHJcbiAgICAgICAgc2luZ2xlSXRlbTogdHJ1ZSxcclxuICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICBjb250cm9sc0NsYXNzOiBcInNsaWRlcl9fY29udHJvbHNcIixcclxuICAgICAgICBkb3RzQ2xhc3M6IFwic2xpZGVyX19uYXZcIixcclxuICAgICAgICBkb3RDbGFzczogXCJzbGlkZXJfX2RvdFwiLFxyXG4gICAgICAgIC8vIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDgwMCxcclxuICAgICAgICAvLyBhdXRvcGxheVRpbWVvdXQ6IDEwMDAwLFxyXG4gICAgICAgIHNjcm9sbF9zcGVlZDogODAwLFxyXG4gICAgICAgIGRvdHNTcGVlZDogODAwLFxyXG4gICAgICAgIGRyYWdFbmRTcGVlZDogODAwLFxyXG4gICAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgICAgbGF6eUxvYWQ6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ3dpbmRvdycpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfSk7XHJcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAkKCcubmF2LXRyaWdnZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy5uYXYnKS5oZWlnaHQoJzEwMHZoJyk7XHJcbiAgICAgICAgJCgnLndyYXBwZXInKS5jc3MoXCJjc3NUZXh0XCIsXCJoZWlnaHQ6XCIrd2luZG93SGVpZ2h0K1wicHghaW1wb3J0YW50XCIpXHJcbiAgICB9KTtcclxuICAgICQoJy5uYXYtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJy53cmFwcGVyJykuY3NzKFwiY3NzVGV4dFwiLFwiXCIpO1xyXG4gICAgICAgICQoJy5uYXYnKS5oZWlnaHQoJycpXHJcbiAgICB9KTtcclxufSkoKTsiXX0=
