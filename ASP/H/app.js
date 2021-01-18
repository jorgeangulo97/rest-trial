$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
})

const header = document.querySelector('.containerra');
window.addEventListener('scroll',()=>{
    let scrollPos=window.scrollY;
    header.style.backgroundSize= `${scrollPos+100}%`;
  
})

function myFunction() {
    alert("Hi");
}