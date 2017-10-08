const template = document.createElement("template");
template.innerHTML = 
`
<style>
:host {
    --card-background-color-default: #d3d3d3;

    display: inline-block;
    position: relative;
    background-color:var(--card-background-color, var(--card-background-color-default));
    padding: 5px;
    margin: 5px;
    text-align: justify;
}

:host([hidden]) {
    display: none;
}

::slotted(img){
    width: 100%;
}

.delete-button {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    cursor: pointer;
}

.add-button {
    position: absolute;
    bottom: 0.5em;
    right: 0.5em;
    cursor: pointer;
}

.icon-button {
    user-select: none;
}

.icon-button:hover {
    transform: scale(1.2);
    transition: 0.1s transform;
}
</style>
<label class="icon-button delete-button">✖</label>

<slot name="header-image"></slot>
<slot name="header"></slot>
<slot name="text-content"></slot>

<label class="icon-button add-button">✚</label>`;

class CustomCard extends HTMLElement {
    static get observedAttributes(){
        return []
    }
    
    constructor(){
        super();

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback(){
        const deleteButton = this.shadowRoot.querySelector(".delete-button");
        if(deleteButton != null){
            deleteButton.addEventListener("click", this.handleDelete);
        }

        const addButton = this.shadowRoot.querySelector(".add-button");
        if(addButton != null){
            addButton.addEventListener("click", this.handleAdd);
        }
    }

    disconnectedCallback(){
        const deleteButton = this.shadowRoot.querySelector(".delete-button");
        if(deleteButton != null){
            deleteButton.removeEventListener("click", this.handleDelete);
        }

        const addButton = this.shadowRoot.querySelector(".add-button");
        if(addButton != null){
            addButton.removeEventListener("click", this.handleAdd);
        }
    }

    attributeChangedCallback(attributeName, oldVal, newVal){
        console.log(attributeName, oldVal, newVal);
    }

    handleDelete(){
        this.parentElement.removeChild(this);
    }

    handleAdd(){
        
    }
}

window.customElements.define('custom-card', CustomCard);