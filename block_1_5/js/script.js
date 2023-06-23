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

const sliders = document.querySelectorAll('.swiper-container');

let mySwipers = [];

function sliderinit() {
    sliders.forEach((slider, index) => {
        console.log(slider)
        if (!slider.swiper) {
            mySwipers[index] = new Swiper(slider, {
                freeMode: false,
                slidesPerView: 'auto',
                spaceBetween: 0,
                grabCursor: true,
                preventClicks: true,
                focusableElements: 'video',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                }
            })
        } else {
            return
        }
    })
}

function sliderDestroy() {
    // удаляем все слайдеры
    sliders.forEach((slider, index) => {
        if (slider.swiper) mySwipers[index].destroy(true, true)
    })

}
function checker() {
    // >600 удаялем, в другом случа инициализируем, если до этого не инициализировали
    if (window.matchMedia("(min-width: 768px)").matches) {
        // >600 удаляем слайдеры если такие есть
        sliderDestroy()
    } else {
        sliderinit()
    }
}

checker();
window.addEventListener('optimizedResize', () => {
    checker();
});

let rmbutton = document.getElementById('read-more__button');
let rmimg = document.getElementById('read-more__img');
let rmtext = document.getElementById('read-more__text');
let complist = document.getElementById('companies-list');

rmbutton.onclick = function () {
    if (rmimg.classList.length === 1) {
        rmimg.classList.toggle('read-more__expand-reverse');
        complist.classList.toggle('hidden');
        rmtext.textContent = 'Скрыть';
    } else {
        rmimg.classList.toggle('read-more__expand-reverse');
        complist.classList.toggle('hidden');
        rmtext.textContent = 'Показать все';
    }
}