"use strict"

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// function minusSlide() {
//     showSlides(slideIndex -= 1);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("item");
//     var dots = document.getElementsByClassName("slider-dots_item");
//     if (n > slides.length) {
//         slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }
// ............................................................................................
let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};


// const menuLinks = document.querySelectorAll('.menu-link');

// Array.from(menuLinks).forEach(link => {
//     link.addEventListener()
// })

/* ..........................................SWIPER СЛАЙДЕР НАЧАЛО........................ */
var swiper1 = new Swiper('.swiper1', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // Responsive breakpoints1
    breakpoints: {
        // when window width is >= 360px
        360: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 1378px
        1378: {
            slidesPerView: 3,
            spaceBetween: 100
        },
    }
})

var swiper2 = new Swiper('.swiper2', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Default parameters
    slidesPerView: 0,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 360px
        360: {
            slidesPerView: 1.2,
            spaceBetween: 0,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2.8,
            spaceBetween: 6
        },
        // when window width is >= 1378px
        1378: {
            slidesPerView: 4,
            spaceBetween: 6
        },
    }
})
/* ..........................................SWIPER СЛАЙДЕР КОНЕЦ........................ */

/* ..........................................РАЗВЕРНУТЬ-СВЕРНУТЬ НАЧАЛО......................*/

document.getElementById("expend1").addEventListener('click', toggleMe);
toggleMe()
function toggleMe() {
    let x = document.getElementById("about__txt__desctop1");
    let y = document.getElementById("about__txt1");

    if (!x && !y) return true;

    if (x.style.display == "none" && y.style.display == "block") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }

    return true;
}

/* ..........................................РАЗВЕРНУТЬ-СВЕРНУТЬ КОНЕЦ......................*/

