// let rmbutton = document.getElementById('read-more__button-brands');
let rmimg = document.getElementById('read-more__img');
let rmtext = document.getElementById('read-more__text');
let complist = document.getElementById('companies-list');
let readMoreButton = document.querySelector('.read-more__button-brands');


readMoreButton.addEventListener('click', function () {
    if (rmimg.classList.length === 1) {
        rmimg.classList.toggle('read-more__expand-reverse');
        complist.classList.toggle('hidden');
        rmtext.textContent = 'Скрыть';
    } else {
        rmimg.classList.toggle('read-more__expand-reverse');
        complist.classList.toggle('hidden');
        rmtext.textContent = 'Показать все';
    }
})


// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
// keep track of swiper instances to destroy later

const breakpoints = [
    window.matchMedia('(min-width:1140px)'),
    window.matchMedia('(min-width:768px)'),
    window.matchMedia('(min-width:1140px)')
]

let mySwiperBrands;
let mySwiperServices;

const breakpointChecker = function () {
    // if larger viewport and multi-row layout needed
    if (breakpoints[1].matches === true) {
        // clean up old instances and inline styles when available
        if (mySwiperBrands !== undefined) {
            console.log('Отключаю свайпер Brands');
            mySwiperBrands.destroy(true, true);
        }
    } else if (breakpoints[1].matches === false) {
        // fire small viewport version of swiper
        enableSwiper(2);
    }
    if (breakpoints[0].matches === true || breakpoints[2].matches === true) {
        // clean up old instances and inline styles when available
        if (mySwiperServices !== undefined) {
            console.log('Отключаю свайпер Services');
            mySwiperServices.destroy(true, true);
        }
        // or/and do nothing
        // return;
        // else if a small viewport and single column layout needed
    } else if (breakpoints[0].matches === false) {
        // fire small viewport version of swiper
        enableSwiper(1);
    }
    console.log(mySwiperBrands);
    console.log(mySwiperServices);
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

const enableSwiper = function (num) {
    if (num === 2) {
        console.log('Включаю свайпер Brands');
        mySwiperBrands = new Swiper('.swiper-container-brands', {
            freeMode: true,
            slidesPerView: 'auto',
            spaceBetween: 0,
            grabCursor: false,
            preventClicks: true,
            // focusableElements: 'video',
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        });
    } else if (num === 1) {
        console.log('Включаю свайпер services');
        mySwiperServices = new Swiper('.swiper-container-services', {
            freeMode: false,
            slidesPerView: 'auto',
            spaceBetween: 0,
            grabCursor: false,
            preventClicks: true,
            focusableElements: 'div',
        });
    }
};

//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

// keep an eye on viewport size changes
for (let i = 0; i < 2; i++) {
    console.log('Включаю прослушку для '+i+' элемента')
    breakpoints[i].addListener(breakpointChecker);
}

// kickstart
breakpointChecker();