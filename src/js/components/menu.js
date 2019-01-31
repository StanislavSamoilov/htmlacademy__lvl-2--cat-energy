const menu = () => {
  const navMain = document.querySelector('.site-nav');
  const navToggle = document.querySelector('.site-nav__toggle');

  navToggle.addEventListener('click', () => {
    if (navMain.classList.contains('site-nav--closed')) {
      navMain.classList.remove('site-nav--closed');
      navMain.classList.add('site-nav--opened');
    } else {
      navMain.classList.remove('site-nav--opened');
      navMain.classList.add('site-nav--closed');
    }
  });
};

export default menu;
