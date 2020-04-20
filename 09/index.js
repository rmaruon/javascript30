const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
console.log("Hello, I am %s.", "rmaruon");

// Styled
console.log(
  "%c I am some great text",
  "font-size: 50px; background: red; text-shadow: 10px 10px 0 blue"
);

// warning!
console.warn("warn!");

// Error :|
console.error("error!");

// Info
console.info("info!");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
for (dog of dogs) {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old`);
  console.groupEnd(`${dog.name}`);
}

// counting
console.count("A");
console.count("A");
console.count("B");
console.count("B");
console.count("A");
console.count("A");
console.count("A");
console.count("B");
console.count("B");
console.count("B");

console.clear();

console.count("A");
console.count("A");
console.count("B");
console.count("B");
console.count("A");
console.count("A");
console.count("A");
console.count("B");
console.count("B");
console.count("B");

console.clear();

// timing
console.time("fetching data");
fetch("https://api.github.com/users/rmaruon")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
