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

const speackerList = [
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
  {
    name: 'Aime Malaika',
    postion: 'Artificial Intelligence Engeneer',
    image: 'aimemalaika.jpg',
    description: 'Aime Malaika common-bases peer production and published his seminal book the Wealth of network 2016',
  },
];

const expendSpeacker = (start, end) => {
  if (start === 0) {
    document.querySelector('#speakers-list').innerHTML = '';
  }
  for (let i = start; i < end; i += 1) {
    document.querySelector('#speakers-list').innerHTML += `
        <li class="speaker-item">
          <div class="avatar">
            <img src="./assets/images/${speackerList[i].image}" alt="">
          </div>
          <div class="biography">
            <h3 class="names">${speackerList[i].name}</h3>
            <p class="job-title">${speackerList[i].postion}</p>
            <hr class="speakers-info-separator">
            <p class="experience">${speackerList[i].description}</p>
          </div>
        </li>
      `;
  }
};

if (window.screen.width < 768) {
  expendSpeacker(0, 4);
} else {
  expendSpeacker(0, speackerList.length);
}

document.querySelector('.more-spackers').addEventListener('click', (e) => {
  if (!e.target.classList.contains('expended')) {
    e.target.classList.add('expended');
    expendSpeacker(5, speackerList.length);
    e.target.innerHTML = 'Less <i class="fa fa-angle-up"></i>';
  } else {
    e.target.innerHTML = 'More <i class="fa fa-angle-down"></i>';
    e.target.classList.remove('expended');
    expendSpeacker(0, 4);
  }
});

window.addEventListener('resize', () => {
  if (window.screen.width < 768) {
    expendSpeacker(0, 4);
  } else {
    expendSpeacker(0, speackerList.length);
  }
});
