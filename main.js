const tickerSwiper = new Swiper('.ticker__swiper', {
    slidesPerView: 5,
    
    loop: true,
    autoplay:{
        
        delay: 0,
    },
    speed: 4000,
})

const aboutSwiper = new Swiper('.about__swiper', {
    spaceBetween: 50,
    navigation:{
        nextEl: '.button-next',
        prevEl: '.button-prev'
    }
})

const rememberSwiper = new Swiper('.remember__swiper',{
    navigation:{
        nextEl: '.button-next',
        prevEl: '.button-prev'
    },
    
    effect: 'cards',
    cardsEffect:{
        slideShadows: false,
    },
    autoplay:{
        delay: 3000,
    }
})


const modalOpen = document.querySelector('.remember__content-open-full-btn')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')

modalOpen.addEventListener('click', function(){
    modal.classList.add('modal-open')
})
modalClose.addEventListener('click', function(e){
    e.preventDefault();
    modal.classList.remove('modal-open')
})

modal.addEventListener('click', function(e){
    const isModal = e.target;
    if(isModal == modal){
        modal.classList.remove('modal-open')
    }

})