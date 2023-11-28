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
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        // mousewheel: true,
        loop: true,
        speed: 1600,
        autoplay: {
            delay: 3000000
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

AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });