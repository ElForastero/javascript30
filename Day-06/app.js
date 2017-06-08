const endpoint = 'cities.json';
const listElement = document.querySelector('.list');
const inputElement = document.querySelector('.typeahead');
const cities = [];

fetch(endpoint)
  .then(response => response.json())
  .then(array => cities.push(...array));

inputElement.addEventListener('input', event => {
  listElement.innerHTML = '';
  const inputValue = event.target.value;

  if (inputValue.length === 0) {
    return false;
  }

  const regex = new RegExp(inputValue, 'gi');
  const foundCities = cities.filter(city => city.city.match(regex) || city.state.match(regex));
  console.log(foundCities);

  foundCities.map(city => {
    const li = document.createElement('li');
    li.className = 'list__item';
    li.innerHTML += `<div>`;

    const cityMatches = city.city.match(regex);
    if (null !== cityMatches) {
      li.innerHTML += city.city.replace(cityMatches[0], `<span class="list__item-selection">${cityMatches[0]}</span>`);
    } else {
      li.innerHTML += city.city;
    }

    li.innerHTML += ', ';

    const stateMatches = city.state.match(regex);
    if (null !== stateMatches) {
      li.innerHTML += city.state.replace(stateMatches[0], `<span class="list__item-selection">${stateMatches[0]}</span>`);
    } else {
      li.innerHTML += city.state;
    }

    li.innerHTML += `</div>`;

    const numberFormat = new Intl.NumberFormat;
    li.innerHTML += `<div class="list__item-population">${numberFormat.format(city.population)}</div>`;
    listElement.appendChild(li);
  });
});

