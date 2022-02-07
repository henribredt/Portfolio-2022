class Nav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div class="container-max nav">
            <div class="container-full nav-container">
                <a href="index.html" class="a-secondary small-text nav-spacing">Home</a>
                <a href="shop.html" class="a-primary small-text nav-spacing">Blog</a> 
                <a href="shop.html" class="a-primary small-text">Shop</a> 
            </div>
        </div>
            
        `
    }
}

customElements.define('nav-component', Nav);