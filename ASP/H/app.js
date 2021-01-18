$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
})

const header = document.querySelector('.imgFondoa');
window.addEventListener('scroll',()=>{
    let scrollPos=window.scrollY;
    header.style.backgroundSize= `${scrollPos+100}%`;
  
});
/*

var yourImg = document.getElementById('yourImgId');
if(yourImg && yourImg.style) {
    yourImg.style.height = '100px';
    yourImg.style.width = '200px';
}
*/