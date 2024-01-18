let img = document.querySelector('.container__image');
let lightBackground = document.querySelector('.main__background--light');
let blurBackground = document.querySelector('.main__background--blur');
let videoCloser = document.querySelector('.main__video--closer');
let hamburger = document.querySelector('.header__hamburger');
let iframeContainer = document.querySelector('.main__container');
let createdVideo = false;

window.addEventListener("resize", () => {
    if (hamburger.classList.contains("header__hamburguer--active")) {
        hamburger.classList.remove('header__hamburguer--active')
        let icon = hamburger.children[0];
        icon.classList.toggle('fa-xmark');
    }
})

const handleClickDocument = (event) => {
    let iframe = document.querySelector('.container__iframe--active');
    if (!iframe.contains(event.target)) {
        lightBackground.classList.remove('main__background--light-active');
        blurBackground.classList.remove('main__background--blur-active');
        videoCloser.classList.remove('main__video--closer-active');
        iframeContainer.removeChild(iframe);
        videoCreado = false;
        document.removeEventListener('click', handleClickDocument);
    }
}

img.addEventListener('click', () => {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/Mdcw3Sb98DA?si=oxAcOrJ-Yz9A6hS5&autoplay=1');
    iframe.classList.add('container__iframe--active');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('frameborder', '0');
    iframeContainer.appendChild(iframe);
    lightBackground.classList.toggle('main__background--light-active');
    blurBackground.classList.toggle('main__background--blur-active');
    videoCloser.classList.toggle('main__video--closer-active');

    iframe.addEventListener('load', () => {
        console.log("Funciona")
        videoCreado = true;
        document.addEventListener('click', handleClickDocument);
    })
});

videoCloser.addEventListener('click', () => {
    let iframe = document.querySelector('.container__iframe--active');
    lightBackground.classList.toggle('main__background--light-active');
    blurBackground.classList.toggle('main__background--blur-active');
    videoCloser.classList.toggle('main__video--closer-active');
    iframeContainer.removeChild(iframe);
    videoCreado = false;
    document.removeEventListener('click', handleClickDocument);
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('header__hamburguer--active');
    let icon = hamburger.children[0];
    icon.classList.toggle('fa-xmark');
})

