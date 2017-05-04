const handleValueChanging = (name, value) => document.documentElement.style.setProperty(`--${name}`, value);
const addUnits = (value, unit) => `${value}${unit}`;

const process = (event) => {
  const { name, division, units } = event.target.dataset;
  let value = event.target.value;

  if(typeof division !== 'undefined') {
    value /= parseInt(division, 10);
  }

  if(typeof units !== 'undefined') {
    value = addUnits(value, units);
  }

  handleValueChanging(name, value);
};

const inputs = document.getElementsByTagName('input');
[...inputs].map(input => input.addEventListener('input', process));

