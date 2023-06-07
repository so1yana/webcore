let prevActive = '';
let curActive = document.querySelector('.active');
let prevMinHeight = '';
document.body.addEventListener("click", function(event) {
    // console.log(event.target.classList[0], 'swiper-slide' === event.target.classList[0])
    if (event.target.nodeName === "BUTTON") {
        if ('swiper-slide' === event.target.classList[0])
            if (event.target.id !== curActive.id) {
                event.target.classList.toggle("active");
                prevActive = curActive;
                curActive = event.target;
                prevActive.classList.remove('active');
                // console.log("Clicked", event.target);
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
    }
});

new Swiper('.swiper-container', {
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
    preventClicks: true,
    focusableElements: 'video',
});