class Encriptador extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="css/style.css">
            <header>
                <div class="header__contenedor">
                    <img class="contenedor__logo" src="storage/img/Logo.png" alt="Logo Alura Latam">
                </div>
            </header>
            <main>
                <section class="main__form-input">
                    <form id="myForm">
                        <textarea name="chain" class="entrada-texto" cols="30" rows="10" placeholder="Ingrese el texto aquí"></textarea>
                        <div class="form-input__condition">
                            <div class="form-input__menssage">
                                <img src="storage/img/exclamation-circle-fill.png"> <small>Solo letras minúsculas y sin acentos</small>
                            </div>
                            <div class="form-input__button">
                                <input type="submit" data-accion="encrypt" value="Encriptar">
                                <input type="submit" data-accion="decrypt" value="Desencriptar">
                            </div>
                        </div>
                    </form>
                </section>
                <section class="main__form-ouput">
                   <article class="form-ouput active">
                    <img src="storage/img/Muñeco.png">
                    <h1>Ningún mensaje fue encontrado</h1>
                    <p>Ingresa el texto que desees encriptar o desencriptar.</p>
                   </article>
                   <article class="form-ouput__menssage">
                    <p></p>
                    <input type="button" id="copy" value="Copiar">
                    </article>
                </section>
            </main>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#myForm').addEventListener('submit', this.handleSubmit.bind(this));
        this.shadowRoot.querySelector('#copy').addEventListener('click', this.handleCopy.bind(this));
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector('#myForm').removeEventListener('submit', this.handleSubmit);
        this.shadowRoot.querySelector('#copy').removeEventListener('click', this.handleCopy);
    }

    handleSubmit(e) {
        e.preventDefault();
        const btn = e.submitter.dataset.accion;
        const data = Object.fromEntries(new FormData(e.target));

        const output = this.shadowRoot.querySelector('.form-ouput');
        const outputMessage = this.shadowRoot.querySelector('.form-ouput__menssage');
        const p = this.shadowRoot.querySelector('.form-ouput__menssage p');

        if (btn === "encrypt") {
            output.classList.remove("active");
            outputMessage.classList.add("active");
            p.innerHTML = this.encrypt(data);
        } else if (btn === "decrypt") {
            output.classList.remove("active");
            outputMessage.classList.add("active");
            p.innerHTML = this.decrypt(data);
        }
    }

    handleCopy() {
        const p = this.shadowRoot.querySelector('.form-ouput__menssage p');
        const range = document.createRange();
        range.selectNode(p);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        p.innerHTML = "";
        const output = this.shadowRoot.querySelector('.form-ouput');
        const outputMessage = this.shadowRoot.querySelector('.form-ouput__menssage');
        outputMessage.classList.remove("active");
        output.classList.add("active");
    }

    encrypt(object) {
        let word = object.chain.split(" ");
        let conversion = word.map(value => {
            value = value.split('');
            return value.map(caracter => {
                if (caracter === "e") return "enter";
                else if (caracter === "i") return "imes";
                else if (caracter === "a") return "ai";
                else if (caracter === "o") return "ober";
                else if (caracter === "u") return "ufat";
                else return caracter;
            }).join("");
        }).join(" ");
        return conversion;
    }

    decrypt(object) {
        let word = object.chain.split(" ");
        let conversion = word.map(value => {
            value = value.replace(/enter/gi, "e");
            value = value.replace(/imes/gi, "i");
            value = value.replace(/ai/gi, "a");
            value = value.replace(/ober/gi, "o");
            value = value.replace(/ufat/gi, "u");
            return value;
        }).join(" ");
        return conversion;
    }
}

customElements.define('my-form-component', Encriptador);
