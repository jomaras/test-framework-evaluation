class CustomCard extends HTMLElement {
    static get observedAttributes(){
        return []
    }
    
    constructor(){
        super();

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        const template = document.currentScript.ownerDocument.querySelector("#card-template");

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