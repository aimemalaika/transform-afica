const navigation = document.querySelector('.mobile-nav');
const expandMenu = () => {
  navigation.classList.remove('animate-left');
  navigation.classList.add('animate-right');
};

const closeMenu = () => {
  navigation.classList.remove('animate-right');
  navigation.classList.add('animate-left');
};

document.querySelector('.open').addEventListener('click', expandMenu);

const closeClass = document.querySelectorAll('.close');
closeClass.forEach(((element) => element.addEventListener('click', closeMenu)));

const header = document.querySelector('.page-header');

document.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    if (!header.classList.contains('white-bg')) {
      header.classList.add('white-bg');
    }
  } else {
    header.classList.remove('white-bg');
  }
});