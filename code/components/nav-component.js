class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="container-max nav">
            <div class="container-full inline-container-right nav-container">
                <a href="index.html" class="a-secondary small-text nav-spacing">Portfolio</a>
                <a href="https://henribredt.de/blog/index.html" target="_blank" class="a-primary small-text nav-spacing">Blog</a> 
                <a href="shop.html" class="a-primary small-text">Shop</a> 
            </div>
        </div>
            
        `
    }
}

customElements.define('nav-component', Nav);