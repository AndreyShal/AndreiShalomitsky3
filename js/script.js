"use strict"
// ............................................................................................
let menuElem = document.getElementById('sweeties');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};
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
            // spaceBetween: 100
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
    let newHTML1 = '<div id="expend1" class="expend"><a href="#"> \
    Свернуть >>> </a></div>';
    let newHTML2 = '<div id="expend1" class="expend"><a href="#"> \
    Развернуть >>> </a></div>';
    let x = document.getElementById("about__txt__desctop1");
    let y = document.getElementById("about__txt1");
    let z = document.getElementById("expend1");

    if (!x && !y) return true;

    if (x.style.display == "none" && y.style.display == "block") {
        x.style.display = "block";
        y.style.display = "none";
        z.innerHTML = newHTML1;

    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.innerHTML = newHTML2;
    }

    return true;
}
document.getElementById("expend2").addEventListener('click', toggleMe2);
toggleMe2()
function toggleMe2() {
    let newHTML1 = '<div id="expend2" class="expend"><a href="#"> \
    Свернуть >>> </a></div>';
    let newHTML2 = '<div id="expend2" class="expend"><a href="#"> \
    Развернуть >>> </a></div>';
    let x = document.getElementById("program__text-fool1");
    let y = document.getElementById("prgram__text-mobail1");
    let z = document.getElementById("expend2");

    if (!x && !y) return true;

    if (x.style.display == "none" && y.style.display == "block") {
        x.style.display = "block";
        y.style.display = "none";
        z.innerHTML = newHTML1;
    } else {
        x.style.display = "none";
        y.style.display = "block";
        z.innerHTML = newHTML2;
    }

    return true;
}

document.getElementById("show__all").addEventListener('click', toggleMe3);
toggleMe3()
function toggleMe3() {
    const btn = document.querySelector('#show__all > h4');

    let x = document.getElementById("zinakashina__button");

    if (!x) return true;

    if (x.style.display == "none") {
        x.style.display = "block";
        btn.innerHTML = 'Скрыть обратно';
    } else {
        x.style.display = "none";
        btn.innerHTML = 'Показать всех';
    }

    return true;
}


/* ..........................................РАЗВЕРНУТЬ-СВЕРНУТЬ КОНЕЦ......................*/

