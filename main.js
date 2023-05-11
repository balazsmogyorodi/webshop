import adatLista from "./adat.js";
import Asszinkron from "./aszinkron.js";
import Termekek from "./Termekek.js";
$(function(){
    const aszinkron = new Asszinkron()
   // aszinkron.adatbe("adat.json", beolvasas);
    new Termekek(adatLista);
       
});


function beolvasas(adat) {



}