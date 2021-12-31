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
const aboutButtonNode = document.querySelector("#js-aboutTxt-btn");
let isAboutButtonPressed = false;

aboutButtonNode.addEventListener('click', () => {
    isAboutButtonPressed = !isAboutButtonPressed;
    if (aboutButtonNode.innerText = isAboutButtonPressed) {
        aboutButtonNode.innerText = 'Свернуть <<<';
        document.querySelector('.about__txt-mobail1').classList.add('expend-btn__hidden');
        document.querySelector('.about__txt-mobail2').classList.remove('expend-btn__hidden');
    } else {
        aboutButtonNode.innerText = 'Развернуть >>>';
        document.querySelector('.about__txt-mobail1').classList.remove('expend-btn__hidden');
        document.querySelector('.about__txt-mobail2').classList.add('expend-btn__hidden');
    }
});


const programdButtonNode = document.querySelector("#js-programTxt-btn");
let isProgramButtonPressed = false;

programdButtonNode.addEventListener('click', () => {
    isProgramButtonPressed = !isProgramButtonPressed;
    if (programdButtonNode.innerText = isProgramButtonPressed) {
        programdButtonNode.innerText = 'Свернуть <<<';
        document.querySelector('.prgram__text-mobail1').classList.add('expend-btn__hidden');
        document.querySelector('.program__text-mobail2').classList.remove('expend-btn__hidden');
    } else {
        programdButtonNode.innerText = 'Развернуть >>>';
        document.querySelector('.prgram__text-mobail1').classList.remove('expend-btn__hidden');
        document.querySelector('.program__text-mobail2').classList.add('expend-btn__hidden');
    }
});

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
let scroll__botton = document.querySelectorAll(".scroll__botton");
for (let i = 0; i < scroll__botton.length; i++) {
    scroll__botton[i].addEventListener("click", toggleMenu);
    function toggleMenu() {
        document.getElementById('sweeties').classList.toggle('open');
    };
}

/* ..........................................РАЗВЕРНУТЬ-СВЕРНУТЬ КОНЕЦ......................*/
