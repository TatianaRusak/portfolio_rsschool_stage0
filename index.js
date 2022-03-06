"use strict"

const i18Obj = {
    'en': {
        'skills': 'Skills',
        'portfolio': 'Portfolio',
        'video': 'Video',
        'price': 'Price',
        'contacts': 'Contacts',
        'hero-title': 'Alexa Rise',
        'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
        'hire': 'Hire me',
        'skill-title-1': 'Digital photography',
        'skill-text-1': 'High-quality photos in the studio and on the nature',
        'skill-title-2': 'Video shooting',
        'skill-text-2': 'Capture your moments so that they always stay with you',
        'skill-title-3': 'Rotouch',
        'skill-text-3': 'I strive to make photography surpass reality',
        'skill-title-4': 'Audio',
        'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
        'winter': 'Winter',
        'spring': 'Spring',
        'summer': 'Summer',
        'autumn': 'Autumn',
        'price-description-1-span-1': 'One location',
        'price-description-1-span-2': '120 photos in color',
        'price-description-1-span-3': '12 photos in retouch',
        'price-description-1-span-4': 'Readiness 2-3 weeks',
        'price-description-1-span-5': 'Make up, visage',
        'price-description-2-span-1': 'One or two locations',
        'price-description-2-span-2': '200 photos in color',
        'price-description-2-span-3': '20 photos in retouch',
        'price-description-2-span-4': 'Readiness 1-2 weeks',
        'price-description-2-span-5': 'Make up, visage',
        'price-description-3-span-1': 'Three locations or more',
        'price-description-3-span-2': '300 photos in color',
        'price-description-3-span-3': '50 photos in retouch',
        'price-description-3-span-4': 'Readiness 1 week',
        'price-description-3-span-5': 'Make up, visage, hairstyle',
        'order': 'Order shooting',
        'contact-me': 'Contact me',
        'send-message': 'Send message'
    },
    'ru': {
        'skills': 'Навыки',
        'portfolio': 'Портфолио',
        'video': 'Видео',
        'price': 'Цены',
        'contacts': 'Контакты',
        'hero-title': 'Алекса Райс',
        'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
        'hire': 'Пригласить',
        'skill-title-1': 'Фотография',
        'skill-text-1': 'Высококачественные фото в студии и на природе',
        'skill-title-2': 'Видеосъемка',
        'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
        'skill-title-3': 'Ретушь',
        'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
        'skill-title-4': 'Звук',
        'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
        'winter': 'Зима',
        'spring': 'Весна',
        'summer': 'Лето',
        'autumn': 'Осень',
        'price-description-1-span-1': 'Одна локация',
        'price-description-1-span-2': '120 цветных фото',
        'price-description-1-span-3': '12 отретушированных фото',
        'price-description-1-span-4': 'Готовность через 2-3 недели',
        'price-description-1-span-5': 'Макияж, визаж',
        'price-description-2-span-1': 'Одна-две локации',
        'price-description-2-span-2': '200 цветных фото',
        'price-description-2-span-3': '20 отретушированных фото',
        'price-description-2-span-4': 'Готовность через 1-2 недели',
        'price-description-2-span-5': 'Макияж, визаж',
        'price-description-3-span-1': 'Три локации и больше',
        'price-description-3-span-2': '300 цветных фото',
        'price-description-3-span-3': '50 отретушированных фото',
        'price-description-3-span-4': 'Готовность через 1 неделю',
        'price-description-3-span-5': 'Макияж, визаж, прическа',
        'order': 'Заказать съемку',
        'contact-me': 'Свяжитесь со мной',
        'send-message': 'Отправить'
    }
};
// export default i18Obj;



const burger = document.querySelector('.burger');
const navList = document.querySelector('.nav_list');
const burgerShadow = document.querySelector('.burger-shadow');

function toggleMenu() {
    burger.classList.toggle('open');
    navList.classList.toggle('open');
    burgerShadow.classList.toggle('open');
}

burger.addEventListener('click', toggleMenu);

const navLink = document.querySelectorAll('.nav_link');

function closeMenu() {
    burger.classList.remove('open');
    navList.classList.remove('open');
    burgerShadow.classList.remove('open');
}

navList.addEventListener('click', closeMenu);

// console.log('!!! Все пункты требований выполнены => 75 баллов )) !!!');


/* ============ Переключение картинок ========== */

const portfolioBtn = document.querySelector('.portfolio-btn');
const portfolioAllPhotos = document.querySelectorAll('.portfolio_photo');
const portfolioTabs = document.querySelector('.portfolio_tabs');

// portfolioBtn.addEventListener('click', () => {
//    portfolioAllPhotos.forEach((img, index) => img.src = `assets/img/winter/${index + 1}.jpg`);
// });

function changeImage(event) {
    if (event.target.classList.contains('portfolio-btn')) {
        const season = event.target.dataset.season;
    portfolioAllPhotos.forEach((img, index) => img.src = `./assets/img/${season}/${index + 1}.jpg`);
  }
}

portfolioTabs.addEventListener('click', changeImage);


const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages(){
    seasons.forEach((season) => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${season}/${i}.jpg`;
        }
    });
}
preloadImages(seasons);

/* ============ Добавление класса active ========== */


const portfolioAllBtns = document.querySelectorAll('.portfolio-btn');

function changeClassActive(event){
    portfolioAllBtns.forEach(button => {
        button.classList.remove('active');
        
    });
    event.target.classList.add('active')
}

portfolioTabs.addEventListener('click', changeClassActive);

/* ============ Перевод ========== */

function getTranslate(language) { 

    document.querySelectorAll('[data-i18]').forEach((currentElement) => {
        currentElement.textContent = `${i18Obj[language][currentElement.dataset.i18]}`;
    });
};

const langElem = document.querySelector('.lang');
let lang;

langElem.addEventListener('click', function (event) { 
    if ((event.target.classList.contains('lang_link')) && (event.target.innerHTML === 'en')) {
        getTranslate('en');
        lang = 'en';
    } else {
        getTranslate('ru');
        lang = 'ru';
    };
});

const langLinkAll = document.querySelectorAll('.lang_link');

langElem.addEventListener('click', function (event) {     
    langLinkAll.forEach(link => {
        link.classList.remove('lang_link_active');
        event.target.classList.add('lang_link_active')
    });
});


/* ============ Темная / светлая тема ========== */

const classForLigthTheme = ['skills', 'skills_name', 'skills_decsr', 'devider', 'title', 'portfolio', 'tab_btn', 'video', 'price', 'price_name', 'price_descr']

const themeColor = document.querySelector('.theme');
function getTheme(theme) {
        classForLigthTheme.forEach((elem) => {
            document.querySelectorAll(`.${elem}`).forEach((i) => { 
                i.classList.toggle('light-theme');
            });
        });
    document.querySelector('.light-theme-btn').classList.toggle('change-theme');
    document.querySelector('.dark-theme-btn').classList.toggle('change-theme');
}

themeColor.addEventListener('click', getTheme);


/* ======================= данные хранятся в local storage ========================= */


function getThemeColor() { 
    const themeColor = document.querySelector('.change-theme');
    if (themeColor.classList.contains('light-theme-btn')) {
        return 'light-theme';
    } else { 
        return 'dark-theme';
    }
}

let theme = getThemeColor();


function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if(localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        getTranslate(lang);

        langLinkAll.forEach(link => {
            link.classList.remove('lang_link_active');
            if (link.innerHTML === lang) { 
                link.classList.add('lang_link_active')
            }
        });
    };
    if(localStorage.getItem('theme')) {
        const lang = localStorage.getItem('theme');
        getTheme(theme);
    }
}
window.addEventListener('load', getLocalStorage);

/* ===============================  эффект для кнопок  ======================================= */

const $buttons = document.querySelectorAll('.button-effect');

$buttons.forEach((button) => { 
    button.addEventListener('click', event => {
        const $target = event.target;
        const point = document.createElement('div');
        const size = Math.max($target.clientWidth, $target.clientHeight);
        const half = size * .5;
        point.style = `width:${size}px;height:${size}px;top:${event.layerY - half}px;left:${event.layerX - half}px;`;
        $target.appendChild(point);
        point.classList.add('point');
    });

    button.addEventListener('animationend', event => {
	event.currentTarget.querySelector('.point').remove();
});
})




