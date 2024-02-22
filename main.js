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
const headerClick = () => {

    console.log("Klikniete");

};

const headerItem = document.getElementById("header-item");
console.log(headerItem);
headerItem.addEventListener("click", headerClick);

const search = document.getElementById("search");
console.log(search);
headerItem.addEventListener("click", () => {

    console.log("jestes leszczem");

});