const slideList = $(".page-slider__slide-list")[0];
const slidesAmount = slideList.children.length;
$('.page-slider__amount').text(`/${slidesAmount}`);
let currentSlideIndex = 0;
const slides = {};

Array.from(slideList.children).forEach((slide, index) => {
    slides[index] = slide;
});

function nextSlide() {
    slideList.prepend(slides[(currentSlideIndex + 1) % slidesAmount]);
    currentSlideIndex = (currentSlideIndex + 1) % slidesAmount;
    $('.page-slider__current').text(currentSlideIndex + 1);
}

function init() {
    setInterval(() => {
        nextSlide();
    }, 4000);
}

export default init;