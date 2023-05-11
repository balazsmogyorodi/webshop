import Termek from "./termek.js";

class Termekek {
    #adatlista;

constructor(adatLista) {
    const szuloElem = $("article");
    for (let index = 0; index < adatLista.length; index++) {
        const termek = new Termek(adatLista[index], szuloElem);
    }
    



}



}

export default Termekek;