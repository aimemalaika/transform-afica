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

const partnersList = [
  {
    logo: 'sponsor-1.png',
    link: 'https://www.microsoft.com/en-us/',
  },
  {
    logo: 'sponsor-2.png',
    link: 'https://www.intel.com/content/www/us/en/homepage.html',
  },
  {
    logo: 'sponsor-3.png',
    link: 'https://www.google.com/',
  },
  {
    logo: 'sponsor-4.png',
    link: 'https://aims.ac.rw/',
  },
  {
    logo: 'sponsor-5.png',
    link: 'https://www.unesco.org/en',
  },
  {
    logo: 'sponsor-6.png',
    link: 'https://www.rwandair.com/',
  },
  {
    logo: 'sponsor-7.png',
    link: 'https://www.mtn.co.rw/',
  },
  {
    logo: 'sponsor-8.png',
    link: 'https://www.ibm.com/us-en/',
  },
];

partnersList.forEach((partner) => {
  document.querySelector('.partners-list-items').innerHTML += `
      <li class="partners-items">
        <a target="blanc" href="${partner.link}">
          <img src="./assets/images/${partner.logo}" alt="" />
        </a>
      </li>
    `;
});