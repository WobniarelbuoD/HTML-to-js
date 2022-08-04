let AktoriusVardas1 = 'Nicolas ';
let AktoriusPavarde1 ='Cage';
let AktoriusVardas2 = 'Ryan ';
let AktoriusPavarde2='Reynolds';

let Aktorius_Ilgas1 = AktoriusVardas1 + AktoriusPavarde1.length;

let Aktorius_Ilgas2 = AktoriusVardas2 + AktoriusPavarde2.length;

//Pirmas Blynas
if(Aktorius_Ilgas1 < Aktorius_Ilgas2) {
    console.log(AktoriusVardas1 + AktoriusPavarde1);
}
else{
    console.log(AktoriusVardas2 + AktoriusPavarde2);
}

//Antras Blynas
console.log(AktoriusVardas1.toUpperCase() + AktoriusPavarde1.toLowerCase());
console.log(AktoriusVardas2.toUpperCase() + AktoriusPavarde2.toLowerCase());

//Trecias Blynas
let Suprise = AktoriusVardas1.charAt(0) + AktoriusPavarde1.charAt(0) + AktoriusVardas2.charAt(0) + AktoriusPavarde2.charAt(0);
console.log(Suprise);

//Ketvirtas Blynas
let Suprise2 = AktoriusVardas1.slice(-3) + AktoriusPavarde1.slice(-3) + AktoriusVardas2.slice(-3) + AktoriusPavarde2.slice(-3);
console.log(Suprise2);

//Penktas Blynas
let Tim = 'Once upon a time in hollywood';
console.log(Tim);
Tim = Tim.replaceAll('o','*').replaceAll('O','*');
console.log(Tim);
Tim = Tim.replaceAll('*','o');
console.log(Tim);

//Sestas Blynas
let Tim_Os = (Tim.match(/\o/g) || []).length;
console.log(Tim_Os);

//Septintas Blynas
let AMERICA = 'An American in Paris';
console.log(AMERICA.replace(/[aeiou]/ig,''));
console.log(AktoriusVardas1.replace(/[aeiou]/ig,''));
console.log(Tim.replace(/[aeiou]/ig,''));
let B = "Breakfast at Tiffany's";
let C = '2001: A Space Odyssey';
let D = "It's a Wonderful Life";
console.log(B.replace(/[aeiou]/ig,''));
console.log(C.replace(/[aeiou]/ig,''));
console.log(D.replace(/[aeiou]/ig,''));

//Astuntas Blynas
let Menace = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
let Sultys = "Tik nereikia gąsdinti Pietų Centro, geriant sultis pas save kvartale";
let Menace2 = Menace.match(/\b[a-zA-Z]{5,}\b/g);
console.log(Menace2);
let Sultys2 = Sultys.match(/\b[a-zA-Z]{5,}\b/g);
console.log(Sultys2);

//Bonus
let Random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 3);
console.log(Random)
