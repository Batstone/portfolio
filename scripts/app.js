$(function () {

    // adding click functionality to hamburger menu
    $('.header__mobile-icon-container').on('click', () => {
        $('.js-menu')
            .toggleClass('header__mobile-icon')
            .toggleClass('header__mobile-icon--active')

        if ($('.header__nav').css('display') === 'none') {
            $('.header__nav').css('display', 'flex')
        } else {
            $('.header__nav').css('display', 'none')
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

    $('.about__container').on('click', 'a[href^="#"]', function (e) {

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
