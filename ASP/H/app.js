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

const links = document.querySelectorAll(".navbar-brand");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}