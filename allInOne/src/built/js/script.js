let prevActive = '';
let curActive = document.querySelector('.active');
let prevMinHeight = '';
let burgerCloseButton = document.querySelector('.button-close');
let burgerOpenButton = document.querySelector('.button-burger');
let burgerMenu = document.querySelector('.burger');
let burgerOverlay = document.querySelector('.burger-backdrop');
burgerCloseButton.addEventListener('click', function () {
    burgerOverlay.classList.add('burger--hidden');
});

burgerOpenButton.addEventListener('click', function () {
    burgerOverlay.classList.remove('burger--hidden');
})
document.body.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        if ('swiper-slide' === event.target.classList[0])
            if (event.target.id !== curActive.id) {
                event.target.classList.toggle("active");
                prevActive = curActive;
                curActive = event.target;
                prevActive.classList.remove('active');
            }
        if (event.target.classList[0] === 'read-more__button') {
            // let el = document.querySelector('.main-content__text');
            // let elStyles = el.style;
            // console.log(el.style);
            // if (elStyles.maxHeight === '90px') {
            //     elStyles.maxHeight = '100%';
            // } else {
            //     elStyles.maxHeight = '90px';
            // }
        }
        else {}
    }
});

(function() {
    let throttle = function(type, name, obj) {
        obj = obj || window;
        let running = false;
        let func = function() {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

function checker() {
    // >600 удаялем, в другом случа инициализируем, если до этого не инициализировали
    if (window.matchMedia("(min-width: 1440px)").matches) {
        // >600 удаляем слайдеры если такие есть
        burgerOverlay.classList.remove('burger--hidden');
    } else {
        burgerOverlay.classList.add('burger--hidden');
    }
}

checker();
window.addEventListener('optimizedResize', () => {
    checker();
});

new Swiper('.swiper-container', {
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
    preventClicks: true,
    focusableElements: 'video',
});