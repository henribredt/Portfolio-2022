class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="container-max">
        <hr>
        <div class="container-full mb-1h mt-1h" id="footer">
           
            <div class="container-third-left container-spacer-right hide-on-mobile">
                <a href="#" class="a-primary small-text nav-spacing">Henri Bredt</a>
            </div>
    
            <div class="container-third-right container-spacer-left">
                <div class="inline-container-left">
                    <a href="#" class="a-primary small-text nav-spacing">Legal</a>
                    <a href="privacy.html" class="a-primary small-text nav-spacing">Privacy</a>
                    <a href="#" class="a-primary small-text">Socials</a>
                 </div>
                
            </div>
    
        </div>
    </div>
        `
    }
}

customElements.define('footer-component', Footer);