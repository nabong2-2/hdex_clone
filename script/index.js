//header nav hover
const navTitle = document.querySelectorAll('.nav_title');
const depthWrap = document.querySelector('.depth1')
console.log(navTitle);

navTitle[1].addEventListener('mouseover', ()=>{
    depthWrap.style.display = 'block';
})
depthWrap.addEventListener('mouseout', (e) => {
    // 마우스가 depthWrap 바깥으로 이동하면 숨기기
    // e.relatedTarget은 마우스가 떠난 후, 마우스가 이동한 대상 요소
    if (!depthWrap.contains(e.relatedTarget)) {
        depthWrap.style.display = 'none';
    }
});

//스크롤 내리면 배너 없애기
const header = document.querySelector('header');
const headerBnr = document.querySelector('.header_bnr');
const headerInner = document.querySelector('.header_inner');

header.style.position = 'relative';
header.style.top = '0';
console.log(headerBnr);
window.addEventListener("scroll", ()=>{
    if(window.scrollY > 300) {
        // headerBnr.style.display = 'none';
        header.style.position = 'sticky';
        header.style.top = '-40px';
    }
})

// 1. bg swiper
const bnrSwiper = new Swiper('.bnr_bg', {
    speed: 2500,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
}) 

// 3. add banner swiper
const addbannerSwiper = new Swiper('.add_banner', {
    loop:true,
})

// 5. swiper 
const bestSwiper = new Swiper('.best_swiper', {
    slidesPerView: 5,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})