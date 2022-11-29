let cats = ["Milo", "Otis", "Garfield",];
let append = [...cats, "Broom"];
let forward = ["Arnold", ...cats];
let lastWard = ['Milo', 'Otis', 'Garfield' ]


function destructivelyAppendCat(name){
  return cats.push("Ralph");

}

function destructivelyPrependCat(name){
  return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
  return cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(){
  return cats.shift("Milo");
}

function appendCat(name){
  
  return append.slice("Broom");
}

function prependCat(name){
  return forward.slice("Arnold");
}

function removeLastCat(){
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat(){
  return cats.slice(1);
}




  