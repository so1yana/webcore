let prevActive = '';
let curActive = document.querySelector('.active');
document.body.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        if (event.target.id !== curActive.id) {
            event.target.classList.toggle("active");
            prevActive = curActive;
            curActive = event.target;
            // console.log("Clicked", event.target);
        }
    }
    prevActive.classList.remove('active');
});

new Swiper('.swiper-container', {
    freeMode: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    grabCursor: true,
    preventClicks: true,
    focusableElements: 'video',
});