function computerPlay() {
let random = Math.floor(Math.random() * 3 + 1);
let object;
switch (random) {
    case 1:
        object = 'Paper';
        break;
    case 2:
        object = 'Scissors';
        break; 
    default:
        object = 'Rock';
        break;
}
return object;
}

console.log(computerPlay());