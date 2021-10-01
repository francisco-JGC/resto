
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    let scrollY = window.pageYOffset

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight
        let sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

function scrollHeader() {
    let header = document.getElementById('header')

    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

function loader(){
    document.querySelector('.container__loader').classList.add('fade-out')
}

function fadeOut(){
    setInterval(loader, 3000)
    document.querySelector('.hidden').removeAttribute('class')
}
window.addEventListener('scroll', scrollHeader)
window.addEventListener('scroll', scrollActive)
window.onload = fadeOut;