// document.addEventListener("DOMContentLoaded", function () {

// });

var myLoader;
function loader() {
    myLoader = setTimeout(showPage, 1500);
}
function loading() {
    document.getElementById('loader').classList.add('active');
    document.getElementById('main_content').classList.remove('active');
    myLoader = setTimeout(showPage, 500);
}
function showPage() {
    document.getElementById('loader').classList.remove('active');
    document.getElementById('main_content').classList.add('active');
    myLoader = clearTimeout(myLoader);
}

var modeBtns = document.querySelectorAll('.themeSwitch');

modeBtns.forEach(modeBtn => {
    modeBtn.addEventListener("change", () => {
        var style = document.documentElement.style;

        var penLogo = document.getElementById('penLogo');
        var oxgnLogo = document.getElementById('oxgnLogo');
        var bocuLogo = document.getElementById('bocuLogo');
        var rgtLogo = document.getElementById('rgtLogo');
        var formeLogo = document.getElementById('formeLogo');
        var memoLogo = document.getElementById('memoLogo');

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
            style.setProperty('--colorOverlay', '255,255,255');
            style.setProperty('--colorOverlay2', '0,0,0');

            penLogo.src = 'assets/images/logo_penshoppe__white.svg';
            oxgnLogo.src = 'assets/images/logo_oxgn__white.png';
            bocuLogo.src = 'assets/images/logo_bocu__white.png';
            rgtLogo.src = 'assets/images/logo_regatta__white.png';
            formeLogo.src = 'assets/images/logo_forme__white.png';
            memoLogo.src = 'assets/images/logo_memo__white.png';
            loading();

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
            style.setProperty('--colorOverlay', '0,0,0');
            style.setProperty('--colorOverlay2', '255,255,255');

            penLogo.src = 'assets/images/logo_penshoppe__red.svg';
            oxgnLogo.src = 'assets/images/logo_oxgn__black.png';
            bocuLogo.src = 'assets/images/logo_bocu__black.png';
            rgtLogo.src = 'assets/images/logo_regatta__black.png';
            formeLogo.src = 'assets/images/logo_forme__black.png';
            memoLogo.src = 'assets/images/logo_memo__black.png';
            loading();
        }

    });
});

function overlay () {
    const overlay = document.querySelector('#overlay');
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('active');
    } else {
        overlay.classList.add('active');
    }
}

var navBtn = document.querySelectorAll('.navDrawerBtn, #overlay');
navBtn.forEach(btn => {
    var drawerNav = document.querySelector('#drawerNav');

    btn.addEventListener("click", () => {
        if (drawerNav.classList.contains('active')) {
            drawerNav.classList.remove('active');
            overlay();
        } else {
            drawerNav.classList.add('active');
            overlay();
        }
    })
})

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    slidesPerView: 1.1,
    spaceBetween: 10,
    grabCursor: true,
    // mousewheel: true,
    loop: true,
    speed: 200,
    autoplay: {
        delay: 3000
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        1150: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
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
    
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });