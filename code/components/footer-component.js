class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <p>I am a component footer</p>
        `
    }
}

customElements.define('footer-component', Footer);