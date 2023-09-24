// const bodyElement = document.querySelector('body');
// bodyElement.style.backgrouncolor = '#e9e9e9';

// const newsElement = document.querySelector('.news');
// newsElement.style.backgrouncolor = 'white';
// newsElement.style.maxWidth = '60rem';

// const titleElemeny = document.querySelector('h1');
// titleElemeny, classList.add('news__title');
// titleElemeny.textContent = 'Akktualni novinky';

// const article1 = document.querySelector('#zprava1');
// article1.classList.ass('post--main');

// const lastPicture = document.querySelector('#zprava3 .post__picture');
// lastPictureElement.src = 'images/zprava3-novy.jpg';

const bodyElement = document.querySelector('body');
bodyElement.style.background = '#e9e9e9';

const articleNews = document.querySelector('.news');
articleNews.style.backgroundColor = 'white';
articleNews.style.maxWidth = '60rem';

const newClass = document.querySelector('h1');
newClass.classList.add('news__title');
newClass.textContent = 'Aktualne novinky';

const article = document.getElementById('zprava1');
article.classList.add('post--main');

const article3 = document.querySelector('#zprava3>img');
article3.src = 'images/zprava3-novy.jpg';
