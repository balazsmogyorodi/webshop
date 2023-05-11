
class Termek {

    #nev
    #ar
    constructor(termek, szuloElem) {
        let htmlAdatok = "";
        setNev(termek.nev);
        setAr(termek.ar);
        szuloElem.append(this.articleEpito());
    }
    setNev(nev) {
        this.#nev = nev;
    }

    setAr(ar) {
        this.#ar = ar;
    }

    articleEpito() {
        let kiiras = `div class="termek">
        <h2> ${this.#nev}</h2>
        <h4> ${this.#ar}</h4>
        <button class="megveszem" id="${this.#nev}"></button> </div>`
        return kiiras;
    }









}



export default Termek