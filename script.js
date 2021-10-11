// 1a
const mcuShows = [
  "Loki", 
  "What If...?"
];

// 1b
const starWarsShows = [
  "The Mandalorian",
  "The Bad Batch"
];

// 1c
const disneyPlusShows = [...mcuShows, ...starWarsShows, "Monsters At Work"];

// 1d
console.log(disneyPlusShows);

// 2a
const netflixMovies = {
  action: "Extraction",
  crime: "The Irishman"
};

// 2b
const amazonPrimeMovies = {
  action: "The Tomorrow War",
  drama: "One Night In Miami"
};

// 2c
const streamingMovies = { ...amazonPrimeMovies, ...netflixMovies, musical:"Hamilton" };
// 2d
console.log(streamingMovies);

// 3a
const disneyJunior = [
  "Mickey Mouse Clubhouse", 
  "Spidey and His Amazing Friends"
];

// 3b
const [mickey, spidey] = disneyJunior;

// 3c
console.log(mickey, spidey);
//another way to solve
console.log(disneyJunior);

// 4a
const avengers = {
  warMachine: "James Rhodes",
  theHulk: "Bruce Banner"
};
console.log(avengers);

// 4b
const {warMachine, theHulk} = avengers;

// 4c
console.log(warMachine, theHulk);
//another way to solve
console.log(avengers);

// 4d
const moreAvengers = {
  blackWidow: "Natasha Romanoff",
  hawkeye: "Clint Barton",
  ironMan: "Tony Stark"
};

// 4e
const {blackWidow:nat, ...others} = moreAvengers;
console.log(moreAvengers);

// 4f
console.log(nat, others);

//BONUS TERRITORY
const bonus = {
  first: [1, 2, 3],
  second: [4, 5, 6],
  third: [7, 8, 9]
};
console.log(bonus);
// // 5a 
const all = [...bonus.first, ...bonus.second, ...bonus.third];
// another way to solve
// const all = [
//   ...bonus.first,
//   ...bonus.second,
//   ...bonus.third
// ];
console.log(all);
// console.log(first);

//5b
const {first, second, third} = bonus;
const [one, two, three] = first;
const [four, five, six] = second;
const [seven, eight, nine] = third;
console.log(one, two, three, four, five, six, seven, eight, nine);

// OR
// const [one, two, three] = bonus.first;
// const [four, five, six] = bonus.second;
// const [seven, eight, nine] = bonus.third;
// console.log(one, two, three, four, five, six, seven, eight, nine);

// Destructuring the all array
// const [
//   one,
//   two,
//   three,
//   four,
//   five,
//   six,
//   seven,
//   eight,
//   nine
// ] = all;
// console.log(one, two, three, four, five, six, seven, eight, nine);



