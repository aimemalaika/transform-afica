const pastEvent = [
  {
    banner: 'past-event.jpg',
    year: '2017',
    name: 'Transform Africa Summit 2017',
  },
  {
    banner: 'past-event.jpg',
    year: '2018',
    name: 'Transform Africa Summit 2018',
  },
];

pastEvent.forEach((pevent) => {
  document.querySelector('#event-list-grid').innerHTML += `
    <div class="event-item" style="background-image: url(../assets/images/${pevent.banner});">
      <div class="top-gb">
        <h3>${pevent.year}</h3>
        <h4>${pevent.name}</h4>
      </div>
    </div>
  `;
});