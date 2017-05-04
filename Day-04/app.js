const dump = x => {
  console.log(x);
  return x;
};

const _ = R;
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
console.log(`1. Filter the list of inventors for those who were born in the 1500's`);
const isBetween = _.curry((x, y, z) => z >= x && z <= y);
const isIn1500s = isBetween(1500, 1599);
const getInventorsBornIn1500s = _.filter(_.compose(isIn1500s, _.prop('year')));
console.log(getInventorsBornIn1500s(inventors));

// Array.prototype.map()
console.log(`2. Give us an array of the inventors' first and last names`);
const getFullName = _.compose(_.join(' '), _.props(['first', 'last']));
const getInventorsFullNames = _.map(getFullName);
console.log(getInventorsFullNames(inventors));

// Array.prototype.sort()
console.log(`3. Sort the inventors by birthdate, oldest to youngest`);
const getInventorsFromOldToYoung = _.sortBy(_.prop('year'));
console.log(getInventorsFromOldToYoung(inventors));

// Array.prototype.reduce()
console.log(`4. How many years did all the inventors live?`);
const sumYears = (acc, inventor) => _.add(acc, _.subtract(inventor.passed, inventor.year));
const getTotalYears = _.reduce(sumYears, 0);
console.log(getTotalYears(inventors));

console.log(`5. Sort the inventors by years lived`);
const getSortedByYearsLivedAsc = _.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
console.log(getSortedByYearsLivedAsc(inventors));

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
console.log(`Inventors with 'de' in names`);
const getInventorsWithDeInName = _.filter(_.compose(_.equals(false), _.isEmpty, _.match(/de/i), getFullName));
console.log(getInventorsWithDeInName(inventors));

// 7. sort Exercise
console.log(`Sort the people alphabetically by last name`);
const getInventorsSortedAlphabetically = _.sort((a, b) => a.last > b.last ? 1 : (a.last < b.last ? -1 : 0));
console.log(getInventorsSortedAlphabetically(inventors));

console.log(`8. Reduce Exercise`);
//@todo 💩
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

let uniqueData = [];

data.map(item => {
  if(typeof uniqueData[item] === 'undefined') {
    uniqueData[item] = 1;
  } else {
    uniqueData[item]++;
  }
});

console.log(uniqueData);
