class Asszinkron {
    constructor() {
        fetch(vegpont, {
            method: "GET",
        })
            .then(respnse => respnse.json())
            .then((data) => myCallback(data))
            .catch((err) => console.log(err));
    }
}

export default Asszinkron