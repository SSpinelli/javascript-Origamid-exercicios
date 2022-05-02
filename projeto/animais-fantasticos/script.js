function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');

    const activeTab = (index) => {
    tabContent.forEach((section) => section.classList.remove('ativo'));
    tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((item, index) => item.addEventListener('click', () => activeTab(index)));
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  if(accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    const activeAccordion = ({ target }) => {
      target.classList.toggle(activeClass);
      target.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => item.addEventListener('click', activeAccordion));
  }
}
initAccordion();

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(click) {
    click.preventDefault();
    const href = click.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  internalLinks.forEach((link) => link.addEventListener('click', scrollToSection));
}
initSmoothScroll();

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');

  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible) {
          section.classList.add('ativo');
        }
      })
    }
  }
  animaScroll()

  window.addEventListener('scroll', animaScroll);
}
initScrollAnimation();
