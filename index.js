// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyAppendCat(name) {
    return name = cats.push("Ralph")
}

function destructivelyPrependCat(name) {
    return name = cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    return name = cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    return name = cats.shift();
}

function appendCat(name) {
    return name = [...cats, "Broom"];
}

function prependCat(name) {
    return name = ["Arnold", ...cats];
}

function removeLastCat(name) {
    return name = cats.slice(0, 2);
} 

function removeFirstCat(name) {
    return name = cats.slice(1);
} 