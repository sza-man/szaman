const calc = (a) => {
    //  console.log(a * a);

}



let dupsko = 4;
let Krystian = 100;
var Szymon = 2;




calc(dupsko);
calc(3);
calc(Krystian);
calc(Szymon);

let samochod = {
    color: "red",
    length: 25,
}

calc(samochod.length);
calc(samochod["length"]);

var samochod2 = ["blue", 12]

calc(samochod2[1]);

/*Druga lekcja JS*/
const headerClick = (event) => {
    if (event.target.id != "search") console.log("Klikniete", event.target.id);
};



const headerItem = document.getElementById("header-item");
console.log(headerItem);
headerItem.addEventListener("click", headerClick);

const search = document.getElementById("search");
console.log(search);
search.addEventListener("click", () => {

    console.log("jestes leszczem");

});

/* Przykład * /

const show = (x) => console.log(x);

const doAction = () => {
    show(5);
    show(2);
    show(10);
}


const addEventListenerTest = (typEventu, funkcja) => {
    funkcja('event');
}

const clickItem = (event) => {
    console.log('blablala', event)
};

addEventListenerTest('click', clickItem);


const greeter = () => console.log('Siema');
const greeter2 = (name) => console.log('Siema ' + name);

1.
if('wartosc') //zrob cos

2.
if('wartosc') {
    //zrob cos
}

3.
if('wartosc') {
    //zrob cos
} else {
    //jesli nie to zrob to
}

4.
if('wartosc') {
    if('wartosc') console.log('costam')
    //zrob cos
} else {
    //jesli nie to zrob to
}

4. const wartosc = waruneklogiczny ? 'wartosctrue' : 'wartoscfalse';
iloscKol = 4;
iloscKol > 0 ? 'tak':'nie';
//'tak'
iloscKol = 0;
iloscKol > 0 ? 'tak':'nie';
//'nie'

//greeter2('Kuba');
/* */


const boki = [2, 5, 78, 41, 12, 63];

const pole = (a) => a * a;

const wartosci = boki.map(pole);

console.log(wartosci);



const imiona = ["a", "t", "u", "a", "x", "d"];

const greeter = (imie) => "siema " + imie;

const greet = imiona.map(greeter);

console.log(greet);





const imgList = ["a", "t", "u", "a", "x", "d"];

const code = (src) => '<li><img src="' + src + '" alt="cat" /></li>';

const mapped = imgList.map(code);

console.log(mapped);




const pole5 = (a) => a * a;

const pole6 = (a) => {
    const pole = a * a;
    return pole;

};

console.log(pole5(43));
console.log(pole6(43));







const auto = {

    kolor: "czerwony",
    kola: 4,

};

const auto2 = {

    kolor: "niebieski",
    kola: 18,

};

const auto3 = {

    kolor: "zielony",
    kola: 1,

};

const view = (car) => {

    return [car.kolor, car.kola];

};

console.log(view(auto));
console.log(view(auto2));







const auta = [auto, auto2, auto3, { kola: 4, kolor: "sraczkowaty" }];

const autaview = (car) => {

    return car.kolor + " " + car.kola;
};

const autazmapowane = auta.map(autaview);

console.log(autazmapowane);





/* const imgList = ["a", "t", "u", "a", "x", "d"];

const code = (src) => '<li><img src="' + src + '" alt="cat" /></li>';

const mapped = imgList.map(code);

console.log(mapped); */


const imgList2 = [{ img: "J", alt: "U" }, { img: "H", alt: "O" }, { img: "P", alt: "F" }, { img: "7", alt: "1" }];

const funk = (srcalt) => {

    const srcaltview = '<li><img src="' + srcalt.img + '" alt="' + srcalt.alt + '"/></li>';
    return srcaltview;

};

const mapers = imgList2.map(funk);

console.log(mapers);