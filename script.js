document.addEventListener("DOMContentLoaded", function () {
    var modeBtns = document.querySelectorAll('.themeSwitch');

    modeBtns.forEach(modeBtn => {
        modeBtn.addEventListener("change", () => {
            var style = document.documentElement.style;
    
            if (modeBtn.checked) {
                // DARK MODE
                style.setProperty('--colorBackground', '#2a2b30');
                style.setProperty('--colorHeadline', '#fdf7d9');
                style.setProperty('--colorParagraph', '#8e9fbf');
                style.setProperty('--colorButton', '#7378ae');
                style.setProperty('--colorButtonText', '#000001');
                style.setProperty('--colorStroke', '#fdf7d9');
                style.setProperty('--colorMain', '#000001');
                style.setProperty('--colorHighlight', '#7378ae');
                style.setProperty('--colorSecondary', '#125320');
                style.setProperty('--colorTertiary', '#0dafbd');
            } else {
                // DEFAULT
                style.setProperty('--colorBackground', '#f9f4ef');
                style.setProperty('--colorHeadline', '#020826');
                style.setProperty('--colorParagraph', '#716040');
                style.setProperty('--colorButton', '#8c7851');
                style.setProperty('--colorButtonText', '#fffffe');
                style.setProperty('--colorStroke', '#020826');
                style.setProperty('--colorMain', '#fffffe');
                style.setProperty('--colorHighlight', '#8c7851');
                style.setProperty('--colorSecondary', '#eaddcf');
                style.setProperty('--colorTertiary', '#f25042');
            }
        });
    });
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        mousewheel: true,
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000
        },
        pagination: {
          el: '.swiper-pagination',
        },
        breakpoints: {
            // when window width is <= 767px (mobile)
            900: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 10
            }
        }
    });
});

(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();