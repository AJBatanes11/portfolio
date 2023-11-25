document.addEventListener("DOMContentLoaded", function () {
    const modeBtn = document.getElementById('themeSwitch');

    modeBtn.addEventListener("change", () => {
        var style = document.documentElement.style;

        if (modeBtn.checked) {
            style.setProperty('--colorBackground', '#55423d');
            style.setProperty('--colorHeadline', '#fffffe');
            style.setProperty('--colorParagraph', '#fff3ec');
            style.setProperty('--colorButton', '#ffc0ad');
            style.setProperty('--colorButtonText', '#271c19');
            style.setProperty('--colorStroke', '#140d0b');
            style.setProperty('--colorMain', '#fff3ec');
            style.setProperty('--colorHighlight', '#e78fb3');
            style.setProperty('--colorSecondary', '#ffc0ad');
            style.setProperty('--colorTertiary', '#9656a1');
        } else {
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

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        mousewheel: true,
        loop: true,
        speed: 400,
        autoplay: {
            delay: 15000
        },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    });
});