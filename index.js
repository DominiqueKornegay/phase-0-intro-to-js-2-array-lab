// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyCat = [...cats, name];
    return copyCat;
}

function prependCat(name) {
    const copyCat1 = [name, ...cats]
    return copyCat1;
}

function removeLastCat() {
    const copyCat2 = cats.slice(0, -1)
    return copyCat2
}


function removeFirstCat() {
    const copyCat3 = cats.slice(1)
    return copyCat3
}
