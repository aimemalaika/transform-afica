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

const mainPrograms = [
  {
    icon: 'icons8.png',
    title: 'Artificial Intelligence for Africa',
    description: 'Artificial Intelligence (AI) is a technology that can propel developing economies on a trajectory of sustainable development.',
  },
  {
    icon: 'icons8.png',
    title: 'AgriTech Blueprint for Africa',
    description: 'As the most important sector of the African economy, agriculture has potential to reduce poverty on the continent, increase food security and improve nutrition.',
  },
  {
    icon: 'icons8.png',
    title: 'ICT Skills Capacity Building Blueprint',
    description: 'The purpose of this blueprint is to develop a framework for ICT skills development and capacity building in Africa.',
  },
  {
    icon: 'icons8.png',
    title: 'Digital Economy',
    description: 'This Blueprint seeks to provide a conceptual framework adopted by Kenya in its quest towards the realisation of a successful and sustainable digital economy.',
  },
  {
    icon: 'icons8.png',
    title: 'Digital ID',
    description: 'Smart Africa is the bold and innovative commitment from African Heads of State and Government to accelerate',
  },
];

mainPrograms.forEach((program) => {
  document.querySelector('#main-program-grid').innerHTML += `
    <li class="program-item">
      <div class="program-icon">
        <img src="./assets/images/${program.icon}" alt="">
      </div>
      <div class="program-title">
        <h3>${program.title}</h3>
      </div>
      <div class="program-description">
        <p>${program.description}</p>
      </div>
    </li>
  `;
});

// document.querySelector('#main-program-grid').innerHTML += '';