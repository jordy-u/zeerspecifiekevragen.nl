// Create a class for the element
class WebsiteCard extends HTMLDivElement {

    /*
    Uiteindelijke structuur voor het WebsiteCard-element:

    <div class="col m12 l6 xl4">
        <a class="black-text" href="http://tijdvoorbier.nl">
            <div class="card hoverable z-depth-5">
                <div class="card-image">
                    <img src="images/placeholder.jpg" height="300px">
                </div>
                <div class="card-action">
                    <h5>(Is het) tijd voor bier.nl</h5>
                </div>
            </div>
        </a>
    </div>
     */

    constructor() {
        // Always call super first in constructor
        super();

        // <div class="col m12 l6 xl4">
        this.setAttribute('class', 'col m12 l6 xl4');

        // <a class="black-text" href="http://tijdvoorbier.nl">
        this.hyperlink = this.appendChild(document.createElement('a'));
        this.hyperlink.setAttribute('class', 'black-text');

        // <div class="card hoverable z-depth-5">
        const card = this.hyperlink.appendChild(document.createElement('div'));
        card.setAttribute('class', 'card hoverable z-depth-5');

        // <div class="card-image">
        const cardImage = card.appendChild(document.createElement('div'));
        cardImage.setAttribute('class', 'card-image');

        // <img src="images/placeholder.jpg" height="300px">
        this.image = cardImage.appendChild(document.createElement('img'));
        this.image.setAttribute('height', '300px');

        // <div class="card-action">
        const cardAction = card.appendChild(document.createElement('div'));
        cardAction.setAttribute('class', 'card-action');

        // <h5>(Is het) tijd voor bier.nl</h5>
        this.titel = cardAction.appendChild(document.createElement('h5'));

    }

    connectedCallback() {
        // Take attribute content and put it inside the info span
        this.hyperlink.setAttribute('href', this.getAttribute("href"));
        this.image.setAttribute('src', this.getAttribute("imgSrc"));
        this.image.setAttribute('alt', this.getAttribute("titel"));
        this.titel.innerText = this.getAttribute("titel");
    }
}

// Define the new element
customElements.define('website-card', WebsiteCard, { extends: "div" });
