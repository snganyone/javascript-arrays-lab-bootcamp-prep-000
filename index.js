var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code her
function appendKitten(name) {
  kittens.concat(name);
  return kittens;
}
function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}
