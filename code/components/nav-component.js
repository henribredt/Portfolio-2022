class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="container-max nav">
            <div class="container-full">
                <p style="padding: 1.3rem;">Header</p>
            </div>
        </div>
            
        `
    }
}

customElements.define('nav-component', Nav);