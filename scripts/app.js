$(function () {

    // adding clikc functionality to hamburger menu
    $('.mobile-nav').on('click', () => {


        $('.js-menu')
            .toggleClass('mobile-nav-icon')
            .toggleClass('mobile-nav-icon-active')


        if ($('.main-nav').css('display') === 'none') {
            $('.main-nav').css('display', 'flex')
        } else {
            $('.main-nav').css('display', 'none')
        }
    })

    // Scroll behaviour with anchor tags
    $('nav').on('click', 'a[href^="#"]', function (e) {

        e.preventDefault()

        const $targetHref = $(this).attr('href')
        $('html, body').animate(
            {
                scrollTop: $($targetHref).offset().top,
            },
            1000
        )
    })

    $('.about-me-container').on('click', 'a[href^="#"]', function (e) {

        e.preventDefault()

        const $targetHref = $(this).attr('href')
        $('html, body').animate(
            {
                scrollTop: $($targetHref).offset().top,
            },
            1000
        )
    })
})
